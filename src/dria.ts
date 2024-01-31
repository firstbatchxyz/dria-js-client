import Axios from "axios";
import type { AxiosInstance } from "axios";
import type { DriaParams, ModelTypes } from "./types";
import * as proto from "./proto";
import { SearchOptions, QueryOptions, BatchVectors, BatchTexts } from "./schemas";

// TODO: add metadata as a generic type
export class Dria {
  protected client: AxiosInstance;
  contractId: string;
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
      validateStatus: () => true, // let us handle the errors
    });
  }

  /** A text-based search. */
  async search(query: string, options?: SearchOptions) {
    options = SearchOptions.parse(options ?? {});
    return await this.post<{ id: number; metadata: string; score: number }[]>("https://search.dria.co/hnsw/search", {
      query,
      contract_id: this.contractId,
      top_n: options.topK,
      level: options.level,
      rerank: options.rerank,
      field: options.field,
    });
  }

  /** A vector-based query. */
  async query(vector: number[], options?: QueryOptions) {
    options = QueryOptions.parse(options ?? {});
    const data = await this.post<{ id: number; metadata: string; score: number }[]>(
      "https://search.dria.co/hnsw/query",
      {
        vector,
        contract_id: this.contractId,
        top_n: options.topK,
      },
    );
    return data.map((d) => ({ ...d, metadata: JSON.parse(d.metadata) as { id: string; page: number; text: string } }));
  }

  /** Fetch vectors with the given IDs. */
  async fetch(ids: number[]) {
    const data = await this.post<string[]>("https://search.dria.co/hnsw/fetch", {
      id: ids,
      contract_id: this.contractId,
    });
    return data.map((d) => JSON.parse(d) as { id: string; page: string; text: string });
  }

  async insertVectors(items: BatchVectors) {
    items = BatchVectors.parse(items);
    throw "TODO: implement";
    const data = this.post<string>("https://search.dria.co/hnswt/insert_vector", {
      data: "", // TODO: this is base64 encoded
      model: "model-name-here",
      contract_id: "model-name-here",
      batch_size: items.length,
    });
    return { message: data };
  }

  async insertTexts(items: BatchTexts) {
    items = BatchTexts.parse(items);
    throw "TODO: implement";
    const data = this.post<string>("https://search.dria.co/hnswt/insert_text", {
      data: "", // TODO: this is base64 encoded
      model: "model-name-here",
      contract_id: "model-name-here",
      batch_size: items.length,
    });
    return { message: data };
  }

  /** Get the embedding model used by a contract. */
  protected async getModel(contractId: string) {
    const data = await this.get<{ model: { embedding: string } }>("https://test.dria.co/v1/knowledge/index/get_model", {
      contract_id: contractId,
    });
    return data.model.embedding;
  }

  private async post<T = unknown>(url: string, body: unknown) {
    const res = await this.client.post<{ success: boolean; data: T; code: number }>(url, body);
    if (res.status !== 200) {
      throw `Dria API (POST) failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    return res.data.data;
  }

  private async get<T = unknown>(url: string, params: Record<string, unknown> = {}) {
    const res = await this.client.get<{ success: boolean; data: T; code: number }>(url, { params });
    if (res.status !== 200) {
      throw `Dria API (GET) failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    return res.data.data;
  }
}
