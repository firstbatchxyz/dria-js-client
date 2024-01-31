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
