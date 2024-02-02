/** Dria client parameters. */
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
