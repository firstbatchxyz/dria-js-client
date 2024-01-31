import Axios from "axios";
import type { AxiosInstance } from "axios";
import type { DriaParams } from "./types";
import { SearchOptions, QueryOptions } from "./schemas";

// TODO: add metadata as a generic type
export class Dria {
  protected client: AxiosInstance;
  indexType: Required<DriaParams>["indexType"];
  contractId: string;

  constructor(params: DriaParams) {
    const apiKey = params.apiKey ?? process.env.DRIA_API_KEY;
    if (!apiKey) throw new Error("Missing Dria API key.");

    this.contractId = params.contractId;

    this.indexType = params.indexType ?? "hnsw";

    this.client = Axios.create({
      baseURL: {
        // FIXME: are these correct?
        hnsw: "https://search.dria.co/hnsw/",
        annoy: "https://search.dria.co/",
      }[this.indexType],
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Accept: "*/*",
      },
      // Never throw
      validateStatus: () => true,
    });
  }

  /** A text-based search. */
  async search(query: string, options?: SearchOptions) {
    return await this.post("https://search.dria.co/hnsw/search", {
      query,
      contract_id: this.contractId,
      ...SearchOptions.parse(options),
    });
  }

  /** A vector-based query. */
  async query(vector: number[], options?: QueryOptions) {
    return await this.post("https://search.dria.co/hnsw/query", {
      vector,
      contract_id: this.contractId,
      ...QueryOptions.parse(options),
    });
  }

  /** Fetch vectors with the given IDs. */
  async fetch(ids: number[]) {
    const data = await this.post<string[]>("https://search.dria.co/hnsw/fetch", {
      id: ids,
      contract_id: this.contractId,
    });
    return data.map((d) => JSON.parse(d) as { id: string; page: string; text: string });
  }

  /** Get the embedding model used by a contract. */
  protected async getModel(contractId: string) {
    const data = await this.get<{ model: string }>("https://test.dria.co/v1/knowledge/index/get_model", {
      contract_id: contractId,
    });
    return data.model;
  }

  private async post<T = unknown>(url: string, body: unknown) {
    const res = await this.client.post<{ success: boolean; data: T; code: number }>(url, body);
    if (res.status !== 200) {
      throw `Dria API failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    // TODO: API should fix this `data.data` thing...
    return res.data.data;
  }

  private async get<T = unknown>(url: string, params: Record<string, unknown> = {}) {
    const res = await this.client.get<{ success: boolean; data: T; code: number }>(url, { params });
    if (res.status !== 200) {
      throw `Dria API failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    // TODO: API should fix this `data.data` thing...
    return res.data.data;
  }
}
