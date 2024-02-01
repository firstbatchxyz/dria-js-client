import { expect, describe, it } from "bun:test";
import { dria, randomVector } from "./common";
import { BatchTexts, BatchVectors } from "../src/schemas";
import { Dria } from "../src";

describe("API", () => {
  describe("fetch", () => {
    it("should fetch vectors with given ids", async () => {
      const ids = [0, 1, 2];
      const res = await dria.fetch(ids);
      res.forEach((r) => {
        expect(r.id).toBeString();
        expect(r.text).toBeString();
      });
    });

    it("should NOT fetch without ids", async () => {
      expect(async () => await dria.fetch([])).toThrow("No IDs provided.");
    });
  });

  describe("search", () => {
    it("should search with a text", async () => {
      const text = "What is a Union type?";
      const res = await dria.search(text);
      expect(res.length).toBe(10); // default topK
      res.forEach((r) => {
        expect(r.id).toBeNumber();
        expect(r.score).toBeGreaterThan(0);
        expect(r.metadata).toBeString();
      });
    });

    it("should search with custom parameters", async () => {
      const topK = 5;
      const text = "What is a Union type?";
      const res = await dria.search(text, { rerank: false, level: 1, topK });
      expect(res.length).toBe(topK);
      res.forEach((r) => {
        expect(r.id).toBeNumber();
        expect(r.score).toBeGreaterThan(0);
        expect(r.metadata).toBeString();
      });
    });

    it("should NOT search with wrong topK", async () => {
      expect(async () => await dria.search("hi", { topK: 21 })).toThrow();
      expect(async () => await dria.search("hi", { topK: 10.05 })).toThrow();
      expect(async () => await dria.search("hi", { topK: 0 })).toThrow();
    });

    it("should NOT search with wrong level", async () => {
      expect(async () => await dria.search("hi", { level: 5 })).toThrow();
      expect(async () => await dria.search("hi", { level: 2.5 })).toThrow();
      expect(async () => await dria.search("hi", { level: 0 })).toThrow();
    });
  });

  describe("query", () => {
    it("should query with a vector", async () => {
      const vector = randomVector(1536);
      const res = await dria.query(vector);
      expect(res.length).toBe(10); // default topK
      res.forEach((r) => {
        expect(r.id).toBeNumber();
        expect(r.score).toBeNumber();
        expect(r.metadata).toBeObject();
        expect(r.metadata.id).toBeString();
        expect(r.metadata.text).toBeString();
      });
    });

    it("should query with custom parameters", async () => {
      const topK = 5;
      const vector = randomVector(1536);
      const res = await dria.query(vector, { topK });
      expect(res.length).toBe(topK);
      res.forEach((r) => {
        expect(r.id).toBeNumber();
        expect(r.score).toBeNumber();
        expect(r.metadata).toBeObject();
        expect(r.metadata.id).toBeString();
        expect(r.metadata.text).toBeString();
      });
    });

    it("should NOT query with wrong topK", async () => {
      expect(async () => await dria.query([1], { topK: 21 })).toThrow();
      expect(async () => await dria.query([1], { topK: 10.05 })).toThrow();
      expect(async () => await dria.query([1], { topK: 0 })).toThrow();
    });
  });

  // waiting for API fix
  describe.todo("insert texts", () => {
    it("should insert texts", async () => {
      const res = await dria.insertTexts([
        { text: "I am an inserted text.", metadata: { id: 112233, info: "Test_1" } },
        { text: "I am another inserted text.", metadata: { id: 223344, info: "Test_2" } },
      ]);
      expect(res.message).toBeString();
    });

    it("should NOT insert too many texts at once", async () => {
      const texts: BatchTexts = Array.from({ length: 1001 }, () => ({ text: "foo", metadata: {} }));
      expect(async () => await dria.insertTexts(texts)).toThrow();
    });
  });

  describe("insert vectors", () => {
    it("should insert vectors", async () => {
      const res = await dria.insertVectors([
        { vector: randomVector(1536), metadata: { id: 112233, info: "Test_1" } },
        { vector: randomVector(1536), metadata: { id: 223344, info: "Test_2" } },
      ]);
      expect(res.message).toBe("Values are successfully added to index.");
    });

    it("should NOT insert too many vectors at once", async () => {
      const vectors: BatchVectors = Array.from({ length: 1001 }, () => ({ vector: randomVector(3), metadata: {} }));
      expect(async () => await dria.insertVectors(vectors)).toThrow();
    });
  });

  describe.skip("create", () => {
    const tmpDria = new Dria({});
    let contractId: string;

    it("should create a new index", async () => {
      contractId = await dria.create(
        "testContract" + Math.round(Math.random() * 1000),
        "jinaai/jina-embeddings-v2-base-en",
        "test",
      );
      expect(contractId).toBeString();
    });

    it("should insert a vector to the new index", async () => {});

    it("should fetch the vector", async () => {
      const res = await dria.fetch([0]);
    });
  });
});
