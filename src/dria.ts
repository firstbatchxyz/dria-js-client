import Axios from "axios";
import type { AxiosInstance } from "axios";
import { encodeBatchTexts, encodeBatchVectors } from "./proto";
import { SearchOptions, QueryOptions, BatchVectors, BatchTexts } from "./schemas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Dria<T = any> {
  protected client: AxiosInstance;
  contractId: string | undefined;
  /** Cached contract models. */
  private models: Record<string, ModelTypes> = {};

  constructor(params: DriaParams) {
    const apiKey = params.apiKey ?? process.env.DRIA_API_KEY;
    if (!apiKey) throw new Error("Missing Dria API key.");

    this.contractId = params.contractId;
    this.client = Axios.create({
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Accept: "*/*",
      },
      // lets us handle the errors
      validateStatus: () => true,
    });
  }

  /** A text-based search. */
  async search(text: string, options: SearchOptions = {}) {
    options = SearchOptions.parse(options);
    return await this.post<{ id: number; metadata: string; score: number }[]>("https://search.dria.co/hnsw/search", {
      query: text,
      contract_id: this.getContractId(),
      top_n: options.topK,
      level: options.level,
      rerank: options.rerank,
      field: options.field,
    });
  }

  /** A vector-based query. */
  async query<M = T>(vector: number[], options: QueryOptions = {}) {
    options = QueryOptions.parse(options);
    const data = await this.post<{ id: number; metadata: string; score: number }[]>(
      "https://search.dria.co/hnsw/query",
      { vector, contract_id: this.getContractId(), top_n: options.topK },
    );
    return data.map((d) => ({ ...d, metadata: JSON.parse(d.metadata) as M }));
  }

  /** Fetch vectors with the given IDs. */
  async fetch<M = T>(ids: number[]) {
    if (ids.length === 0) throw "No IDs provided.";
    const data = await this.post<string[]>("https://search.dria.co/hnsw/fetch", {
      id: ids,
      contract_id: this.getContractId(),
    });
    return data.map((d) => JSON.parse(d) as M);
  }

  /** Create a knowledge base index. */
  async create(name: string, embedding: ModelTypes, category: string, description: string = "") {
    const data = await this.post<{ contract_id: string }>("https://test.dria.co/v1/knowledge/index/create", {
      name,
      embedding,
      category,
      description,
    });
    return data.contract_id;
  }

  async insertVectors(items: BatchVectors) {
    items = BatchVectors.parse(items);
    const encodedData = encodeBatchVectors(items);
    const data = await this.post<string>("https://aws-eu-north-1.hollowdb.xyz/hnswt/insert_vector", {
      data: encodedData,
      model: await this.getModel(this.getContractId()),
      contract_id: this.getContractId(),
      batch_size: items.length,
    });
    return data;
  }

  async insertTexts(items: BatchTexts) {
    items = BatchTexts.parse(items);
    const encodedData = encodeBatchTexts(items);
    const data = await this.post<string>("https://aws-eu-north-1.hollowdb.xyz/hnswt/insert_text", {
      data: encodedData,
      model: await this.getModel(this.getContractId()),
      contract_id: this.getContractId(),
      batch_size: items.length,
    });
    return data;
  }

  /** Get the embedding model used by a contract. */
  async getModel(contractId: string) {
    if (contractId in this.models) {
      return this.models[contractId];
    } else {
      const data = await this.get<{ model: { embedding: string } }>(
        "https://test.dria.co/v1/knowledge/index/get_model",
        { contract_id: contractId },
      );
      // memoize the model for later
      this.models[contractId] = data.model.embedding;
      return data.model.embedding;
    }
  }

  /** Safely gets the contract ID. */
  private getContractId() {
    if (this.contractId) return this.contractId;
    throw Error("ContractID was not set.");
  }

  /**
   * A POST request wrapper.
   * @param url request URL
   * @param body request body
   * @returns parsed response body
   */
  private async post<T = unknown>(url: string, body: unknown) {
    const res = await this.client.post<{ success: boolean; data: T; code: number }>(url, body);
    if (res.status !== 200) {
      throw `Dria API (POST) failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    return res.data.data;
  }

  /**
   * A GET request wrapper.
   * @param url request URL
   * @param params query parameters
   * @returns parsed response body
   */
  private async get<T = unknown>(url: string, params: Record<string, unknown> = {}) {
    const res = await this.client.get<{ success: boolean; data: T; code: number }>(url, { params });
    if (res.status !== 200) {
      throw `Dria API (GET) failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    return res.data.data;
  }
}

export interface DriaParams {
  /**
   * User API key; if not provided, Dria will look for `DRIA_API_KEY` on the environment.
   *
   * To find your API key, go to your profile page at [Dria](https://dria.co/profile). */
  apiKey?: string;
  /**
   * Contract ID for the knowledge, corresponding to the transaction id of a contract deployment on Arweave.
   * In Dria, this can be seen at the top of the page when viewing a knowledge.
   *
   * You can override this field anytime.
   */
  contractId?: string;
}

/** A model name is a string, but this type can auto-complete those supported by Dria. */
type ModelTypes =
  | "jinaai/jina-embeddings-v2-base-en"
  | "jinaai/jina-embeddings-v2-small-en"
  | "openai/text-embedding-ada-002"
  | "openai/text-embedding-3-small"
  | "openai/text-embedding-3-large"
  // allow any string while providing auto-complete
  | (string & NonNullable<unknown>);
