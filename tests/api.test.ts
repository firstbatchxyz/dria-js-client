import { describe, it } from "bun:test";
import { dria, randomVector } from "./common";

describe("api tests", () => {
  describe.skip("fetch", () => {
    it("should fetch vectors with given ids", async () => {
      const res = await dria.fetch([0, 1, 2]);
    });
  });

  describe.skip("search", () => {
    it("should search with a text", async () => {
      const text = "What is a Union type?";
      const res = await dria.search(text);
    });
  });

  describe.skip("query", () => {
    it("should query with a vector", async () => {
      const vector = randomVector(1536);
      const res = await dria.query(vector);
    });
  });

  describe.todo("insert texts", () => {
    it("should insert texts", async () => {
      const res = await dria.insertTexts([
        { text: "I am an inserted text.", metadata: { id: 112233, info: "Test_1" } },
        { text: "I am another inserted text.", metadata: { id: 223344, info: "Test_1" } },
      ]);
    });
  });

  describe.todo("insert vectors", () => {
    it("should insert texts", async () => {
      const res = await dria.insertVectors([
        { vector: randomVector(1536), metadata: { id: 112233, info: "Test_1" } },
        { vector: randomVector(1536), metadata: { id: 223344, info: "Test_1" } },
      ]);
    });
  });
});
