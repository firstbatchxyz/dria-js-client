/** A model name is a string, but this type can auto-complete those supported by Dria. */
export type ModelTypes =
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
