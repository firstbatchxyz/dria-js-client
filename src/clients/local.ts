import Axios from "axios";
import { QueryOptions, BatchVectors, MetadataType } from "../schemas";
import { DriaCommon } from "./common";

/**
 * ## Dria Local Client
 *
 * Dria local client is a convenience tool that allows one to use the served knowledge via [Dria Docker](https://github.com/firstbatchxyz/dria-docker).
 * The URL defaults to `http://localhost:8080`, but you can override it.
 *
 * Unlike the other Dria client, Dria local does not require an API key or a contract ID, since the locally served knowledge serves a single contract.
 * Furthermore, text-based input is not allowed as that requires an embedding model to be running on the side.
 *
 * @template T default type of metadata; a metadata in Dria is a single-level mapping, with string keys and values of type `string`, `number`
 *
 * @example
 * // connects to http://localhost:8080
 * const dria = new DriaLocal();
 *
 * @example
 * const dria = new DriaLocal("your-url");
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class DriaLocal<T extends MetadataType = any> extends DriaCommon {
  public url: string;
  constructor(url: string = "http://localhost:8080") {
    super(
      Axios.create({
        baseURL: url,
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive",
          Accept: "*/*",
        },
        // lets us handle the errors
        validateStatus: () => true,
      }),
    );
    this.url = url;
  }

  /** A simple health-check. */
  async health() {
    try {
      await this.get("/health");
      return true;
    } catch {
      return false;
    }
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
   *
   * @deprecated local query is disabled right now
   */
  private async query<M extends MetadataType = T>(vector: number[], options: QueryOptions = {}) {
    options = QueryOptions.parse(options);
    const data = await this.post<{ id: number; metadata: M; score: number }[]>("/query", {
      vector,
      top_n: options.topK,
    });
    return data;
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
    const data = await this.post<M[]>("/fetch", {
      id: ids,
    });
    return data;
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
    const data = await this.post<string>("/insert_vector", {
      data: items,
    });
    return data;
  }
}
