import Axios from "axios";
import type { AxiosInstance } from "axios";

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
    if (!apiKey) {
      throw new Error("Missing Dria API key.");
    }

    this.contractId = params.contractId;
    // TODO: add address sanity check on contractId (should be 256-bit hex)

    this.indexType = params.indexType || "hnsw";

    this.client = Axios.create({
      baseURL: {
        hnsw: "https://search.dria.co/hnsw/",
        annoy: "https://search.dria.co/",
      }[this.indexType],
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });
  }

  async search() {
    // TODO:
    await this.client.post("search");
  }

  async query() {
    // TODO:
    await this.client.post("query");
  }
}
