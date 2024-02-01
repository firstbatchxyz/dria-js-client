import { expect, describe, it } from "bun:test";
import { randomVector } from "./common";
import { Dria } from "../src";

describe.skip("create knowledge", () => {
  const dria = new Dria({});
  let contractId: string;

  it("should create a new index", async () => {
    contractId = await dria.create(
      "testContract" + Math.round(Math.random() * 1000),
      "jinaai/jina-embeddings-v2-base-en",
      "test",
    );
    expect(contractId).toBeString();
  });

  it("should insert a vector to the new index", async () => {
    // TODO: insert a vector
  });

  it("should fetch the vector", async () => {
    const res = await dria.fetch([0]);
  });
});
