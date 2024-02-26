export default {
  // TODO: naming doesnt really make sense here...
  DRIA: {
    /** URL to make fetch / query / search requests */
    SEARCH_URL: "https://search.dria.co/hnsw",
    /** URL to insert texts and vectors */
    INSERT_URL: "https://search.dria.co/hnswt",
    /** URL to get model */
    API_URL: "https://api.dria.co",
  },
} as const;
