import Axios from "axios";
import type { AxiosInstance } from "axios";
import { SearchOptions, QueryOptions } from "./schemas";

/**
 * Return type of a Dria API call.
 */
type DriaAPIReturnType = {
  data: {
    id: number; // embedding id
    metadata: string; // text
    score: number; // relevance
  }[];
};

/** Models supported by Dria.
 * If you are using these models, you can call `search` and `query` functions.
 * FIXME: use this or types?
 */
export const models = {
  /** Jina's Embeddings V2 Base EN */
  jina_embeddings_v2_base_en: "jinaai/jina-embeddings-v2-base-en",
  /** Jina's Embeddings V2 Small EN */
  jina_embeddings_v2_small_en: "jinaai/jina-embeddings-v2-small-en",
  /** OpenAI's Text Embeddings-2 Ada */
  text_embedding_ada_002: "openai/text-embedding-ada-002",
  /** OpenAI's Text Embeddings-3 Small */
  text_embedding_3_small: "openai/text-embedding-3-small",
  /** OpenAI's Text Embeddings-3 Large */
  text_embedding_3_large: "openai/text-embedding-3-large",
} as const;

export type Models =
  | "jinaai/jina-embeddings-v2-base-en"
  | "jinaai/jina-embeddings-v2-small-en"
  | "openai/text-embedding-ada-002"
  | "openai/text-embedding-3-small"
  | "openai/text-embedding-3-large"
  // allow any string while providing auto-complete
  | (string & NonNullable<unknown>);

export interface DriaParams {
  /**
   * Optionall user API key; if not provided, Dria will look for `DRIA_API_KEY` on the environment.
   *
   * To find your API key, go to your profile page at [Dria](https://dria.co/profile). */
  apiKey?: string;
  /**
   * Contract ID for the knowledge, corresponding to the transaction id of a contract deployment on Arweave.
   *
   * In Dria, this can be seen at the top of the page when viewing a knowledge.
   */
  contractId: string;
  /**
   * Index type of a knowledge, defaults to `hnsw`.
   *
   * - **HNSW**: Hierarchical Navigable Small Worlds
   * - **ANNOY**: Approximate Nearest Neighbors Oh Yeah!
   */
  indexType?: "hnsw" | "annoy";
}

export class Dria {
  protected client: AxiosInstance;
  indexType: Required<DriaParams>["indexType"];
  contractId: string;

  constructor(params: DriaParams) {
    const apiKey = params.apiKey ?? process.env.DRIA_API_KEY;
    if (!apiKey) throw new Error("Missing Dria API key.");

    this.contractId = params.contractId;
    // TODO: can do address sanity check on contractId (should be 256-bit hex)

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
    });
  }

  /** A text-based search. */
  async search(query: string, options?: SearchQueryOptions) {
    SearchQueryOptions.parse(options);
    await this.client.post("search");
  }

  /** A vector-based query. */
  async query() {
    // TODO:
    await this.client.post("query");
  }

  /** Fetch vectors with the given IDs. */
  async fetch(ids: string[]) {
    // TODO:
    await this.client.post("query");
  }

  private async post(url: string) {
    const res = await this.client.post(url, {
      body: JSON.stringify({
        // level: this.level,
        // top_n: this.k,
        // contract_id: this.contractId,
        // vector,
      }),
    });

    if (res.status >= 300) {
      return `Dria Query tool failed with ${res.statusText} (${res.status}).`;
    }

    const body: DriaAPIReturnType = await res.json();
  }
}
