/**
 * Dria client parameters.
 *
 * - `apiKey`: User API key.
 *
 * If not provided, Dria will look for `DRIA_API_KEY` on the environment.
 * To find your API key, go to your profile page at [Dria](https://dria.co/profile).
 *
 * - `contractId`: Contract ID for the knowledge, corresponding to the transaction id of a contract deployment on Arweave.
 * In [Dria](https://dria.co/profile), this can be seen at the top of the page when viewing a knowledge.
 */
export interface DriaParams {
  apiKey?: string;
  contractId?: string;
}

/** Model types supported by Dria, although this type allows any string. */
export type ModelTypes =
  | "jinaai/jina-embeddings-v2-base-en"
  | "jinaai/jina-embeddings-v2-small-en"
  | "openai/text-embedding-ada-002"
  | "openai/text-embedding-3-small"
  | "openai/text-embedding-3-large"
  // allow any string while providing auto-complete
  | (string & NonNullable<unknown>);

/** Category types supported by Dria, although this type allows any string. */
export type CategoryTypes =
  | "Art"
  | "Artificial Intelligence"
  | "Book"
  | "Business"
  | "Children"
  | "Crypto"
  | "Culture"
  | "Fantasy"
  | "Folklore & Mythology"
  | "Media"
  | "Health & Lifestyle"
  | "Medicine"
  | "History"
  | "Philosophy"
  | "Poetry"
  | "Psychology"
  | "Religion"
  | "Science"
  | "Sports"
  | "Technology"
  | "Software Development"
  // allow any string while providing auto-complete
  | (string & NonNullable<unknown>);
