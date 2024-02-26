import Axios from "axios";
import { encodeBatchTexts, encodeBatchVectors } from "../proto";
import { SearchOptions, QueryOptions, BatchVectors, BatchTexts, MetadataType } from "../schemas";
import { CategoryTypes, DriaParams, ModelTypes } from "../types";
import constants from "../constants";
import { DriaCommon } from "./common";

/**
 * ## Dria Client
 *
 * @param params optional API key and contract ID.
 *
 * - `apiKey`: User API key.
 *
 * If not provided, Dria will look for `DRIA_API_KEY` on the environment.
 * To find your API key, go to your profile page at [Dria](https://dria.co/profile).
 *
 * - `contractId`: Contract ID for the knowledge, corresponding to the transaction id of a contract deployment on Arweave.
 * In [Dria](https://dria.co/profile), this can be seen at the top of the page when viewing a knowledge.
 *
 * @template T default type of metadata; a metadata in Dria is a single-level mapping, with string keys and values of type `string`, `number`
 *
 * @example
 * const dria = new Dria({
 *    apiKey: "your-api-key",
 *    contractId: "your-contract"
 * });
 *
 * @example
 * // provide metadata type
 * const dria = new Dria<{foo: string, bar: number}>({
 *    contractId: "your-contract"
 *    // apiKey not provided here, so Dria will
 *    // read it from env as `DRIA_API_KEY`
 * });
 *
 * @example
 * const dria = new Dria();
 * const contractId = await dria.create();
 * dria.contractId = contractId;
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Dria<T extends MetadataType = any> extends DriaCommon {
  contractId: string | undefined;
  /** Cached contract models. */
  private models: Record<string, ModelTypes> = {};

  constructor(params: DriaParams = {}) {
    const apiKey = params.apiKey ?? process.env.DRIA_API_KEY;
    if (!apiKey) throw new Error("Missing Dria API key.");

    super(
      Axios.create({
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          Accept: "*/*",
        },
        // lets us handle the errors
        validateStatus: () => true,
      }),
    );

    this.contractId = params.contractId;
  }

  /** A text-based search.
   * @param text search query text.
   * @param options search options:
   * - `topK`: number of results to return, max 20. (default: 10)
   * - `rerank`: re-rank the results from most to least semantically relevant to the given search query. (default: true)
   * - `level`: level of detail for the search, must be an integer from 0 to 5 (inclusive). (default: 1)
   * - `field`: CSV field name, only relevant for the CSV files.
   * @returns an array of `topK` results with id, metadata (string) and the relevancy score.
   * @example
   * const res = await dria.search("What is the great library of Alexandria?");
   * console.log(res.metadata);
   */
  async search(text: string, options: SearchOptions = {}) {
    options = SearchOptions.parse(options);
    const contractId = this.getContractId();
    return await this.post<{ id: number; metadata: string; score: number }[]>(constants.DRIA.SEARCH_URL + "/search", {
      query: text,
      top_n: options.topK,
      level: options.level,
      rerank: options.rerank,
      field: options.field,
      contract_id: contractId,
      model: await this.getModel(contractId),
    });
  }

  /** A vector-based query.
   * @param vector query vector.
   * @param options query options:
   * - `topK`: number of results to return.
   * @template M type of the metadata, defaults to type provided to the client.
   * @returns an array of `topK` results with id, metadata and the relevancy score.
   * @example
   * const res = await dria.query<{about: string}>([0.1, 0.92, ..., 0.16]);
   * console.log(res[0].metadata.about);
   */
  async query<M extends MetadataType = T>(vector: number[], options: QueryOptions = {}) {
    options = QueryOptions.parse(options);
    const data = await this.post<{ id: number; metadata: string; score: number }[]>(
      constants.DRIA.SEARCH_URL + "/query",
      { vector, contract_id: this.getContractId(), top_n: options.topK },
    );
    return data.map((d) => ({ ...d, metadata: JSON.parse(d.metadata) as M }));
  }

  /** Fetch vectors with the given IDs.
   * @param ids an array of ids.
   * @template M type of the metadata, defaults to type provided to the client.
   * @returns an array of metadatas belonging to the given vector IDs.
   * @example
   * const res = await dria.fetch([0])
   * console.log(res[0])
   */
  async fetch<M extends MetadataType = T>(ids: number[]) {
    if (ids.length === 0) throw "No IDs provided.";
    const data = await this.post<{ metadata: string[]; vectors: number[][] }>(constants.DRIA.SEARCH_URL + "/fetch", {
      id: ids,
      contract_id: this.getContractId(),
    });
    return data.metadata.map((m, i) => ({
      metadata: JSON.parse(m) as M,
      vector: data.vectors[i],
    }));
  }

  /**
   * Insert a batch of vectors to your existing knowledge.
   * @param items batch of vectors with optional metadatas
   * @returns a string indicating success
   * @example
   * const batch = [
   *    {vector: [...], metadata: {}},
   *    {vector: [...], metadata: {foo: 'bar'}},
   *    // ...
   * ]
   * await dria.insertVectors(batch);
   */
  async insertVectors<M extends MetadataType = T>(items: BatchVectors<M>) {
    items = BatchVectors.parse(items) as BatchVectors<M>;
    const encodedData = encodeBatchVectors(items);
    const contractId = this.getContractId();
    const data = await this.post<string>(constants.DRIA.INSERT_URL + "/insert_vector", {
      data: encodedData,
      batch_size: items.length,
      model: await this.getModel(contractId),
      contract_id: contractId,
    });
    return data;
  }

  /**
   * Insert a batch of texts to your existing knowledge.
   * @param items batch of texts with optional metadatas
   * @returns a string indicating success
   * @example
   * const batch = [
   *    {text: "...", metadata: {}},
   *    {text: "...", metadata: {foo: 'bar'}},
   *    // ...
   * ]
   * await dria.insertTexts(batch);
   */
  async insertTexts<M extends MetadataType = T>(items: BatchTexts<M>) {
    items = BatchTexts.parse(items) as BatchTexts<M>;
    const encodedData = encodeBatchTexts(items);
    const contractId = this.getContractId();
    const data = await this.post<string>(constants.DRIA.INSERT_URL + "/insert_text", {
      data: encodedData,
      batch_size: items.length,
      model: await this.getModel(contractId),
      contract_id: contractId,
    });
    return data;
  }

  /** Create a knowledge base index.
   * @param name name of the knowledge.
   * @param embedding model name, can be any string but we provide some preset models.
   * @param category type of the knowledge, can be any string but we provide some preset names.
   * @param description (optional) description of the knowledge.
   * @returns contract ID of the created contract.
   * @example
   * const dria = new Dria({apiKey: "your-api-key"});
   * const contractId = await dria.create(
   *    "My Contract",
   *    "jinaai/jina-embeddings-v2-base-en",
   *    "Science"
   * )
   * dria.contractId = contractId;
   * // you can now make queries, or insert data there
   */
  async create(name: string, embedding: ModelTypes, category: CategoryTypes, description: string = "") {
    const data = await this.post<{ contract_id: string }>(constants.DRIA.API_URL + "/v1/knowledge/index/create", {
      name,
      embedding,
      category,
      description,
    });
    return data.contract_id;
  }

  /** Delete a knowledge.
   * @param contractId contract ID of the knowledge.
   * @returns boolean that indicates success
   * @example
   * const dria = new Dria({apiKey: "your-api-key"});
   * await dria.delete("your-contract-to-delete");
   */
  async delete(contractId: string) {
    // expect message to be `true`
    const data = await this.post<{ message: boolean }>(constants.DRIA.API_URL + "/v1/knowledge/remove", {
      contract_id: contractId,
    });
    return data.message;
  }

  /** Get the embedding model used by a contract.
   * @param contractId contract ID
   * @returns name of the embedding model used by the contract
   * @example
   * const model = await dria.getModel("contract-id-here");
   * console.log(model);
   */
  async getModel(contractId: string) {
    if (contractId in this.models) {
      return this.models[contractId];
    } else {
      const data = await this.get<{ model: string }>(constants.DRIA.API_URL + "/v1/knowledge/index/get_model", {
        contract_id: contractId,
      });
      // memoize the model for later
      this.models[contractId] = data.model;
      return data.model;
    }
  }

  /** Safely gets the contract ID.
   * @returns currently configured contract ID, guaranteed to be not null
   */
  private getContractId() {
    if (this.contractId) return this.contractId;
    throw Error("ContractID was not set.");
  }
}
