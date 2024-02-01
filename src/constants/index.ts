export default {
  /** URL to make fetch / query / search requests */
  DRIA_BASE_URL: "https://search.dria.co/hnsw",
  /** URL to insert texts and vectors */
  DRIA_INSERT_URL: "https://aws-eu-north-1.hollowdb.xyz/hnswt",
  /** URL to get model of a contract, or create a contract */
  DRIA_CONTRACT_URL: "https://test.dria.co/v1/knowledge/index",
} as const;
