import { expect, describe, it } from "bun:test";
import { randomVector } from "./utils";
import { BatchVectors } from "../src/schemas";
import { Dria } from "../src";

describe("create & delete knowledge", () => {
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
      "jina-embeddings-v2-base-en",
      "Test",
    );
    expect(contractId).toBeString();
    dria.contractId = contractId;
  });

  it("should insert a vector to the new index", async () => {
    const res = await dria.insertVectors(batchVectors);
    expect(res).toBe("Values are successfully added to index.");
  });

  it("should fetch the newly inserted vector", async () => {
    const res = await dria.fetch([0]);
    const vec0_res = res[0];
    const vec0_own = batchVectors[0];
    expect(vec0_res.metadata.id).toBe(vec0_own.metadata.id);
  });

  it("should delete the index", async () => {
    const res = await dria.delete(contractId);
    expect(res).toBeTrue();
  });
});
