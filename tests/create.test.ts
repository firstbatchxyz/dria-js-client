import { expect, describe, it } from "bun:test";
import { randomVector } from "./utils";
import { Dria } from "../src";
import { BatchVectors } from "../src/schemas";

describe.skip("create knowledge", () => {
  type MetadataType = { id: number };
  const dria = new Dria<MetadataType>();
  const batchVectors: BatchVectors<MetadataType> = Array.from({ length: 50 }, (_, i) => ({
    vector: randomVector(100),
    metadata: {
      id: i,
    },
  }));
  let contractId: string;

  it("should create a new index", async () => {
    contractId = await dria.create(
      "testContract" + Math.round(Math.random() * 1000),
      "jinaai/jina-embeddings-v2-base-en",
      "Test",
    );
    expect(contractId).toBeString();
  });

  it("should insert a vector to the new index", async () => {
    const res = await dria.insertVectors(batchVectors);
    expect(res).toBe("Values are successfully added to index.");
  });

  it("should fetch the newly inserted vector", async () => {
    const res = await dria.fetch([0]);
    const vec0_res = res[0];
    const vec0_own = batchVectors[0];
    expect(vec0_res.id).toBe(vec0_own.metadata.id);
  });
});
