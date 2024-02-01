import { expect, describe, it } from "bun:test";
import { decodeBatchTexts, decodeBatchVectors, encodeBatchTexts, encodeBatchVectors } from "../src/proto";
import { BatchTexts, BatchVectors } from "../src/schemas";
import { randomVector } from "./common";

describe("protobuf", () => {
  describe("batch texts", () => {
    it("should encode & decode properly", () => {
      const data: BatchTexts = [
        { metadata: { foo: "bar1", age: 20, is: true }, text: "I am a test data." },
        { metadata: { foo: "bar2", age: 40, is: false }, text: "I am another test data." },
      ];

      const enc = encodeBatchTexts(data);
      expect(enc).toBeString();

      const dec = decodeBatchTexts(enc);
      dec.forEach((d, i) => {
        expect(d.text).toBe(data[i].text);
        expect(d.metadata).toEqual(data[i].metadata);
      });
    });

    it("should encode & decode without metadata", () => {
      const data: BatchTexts = [{ metadata: {}, text: "ABC" }];

      const enc = encodeBatchTexts(data);
      expect(enc).toBeString();

      const dec = decodeBatchTexts(enc);
      expect(dec.length).toBe(1);
      expect(dec[0].metadata).toBeEmptyObject();
      expect(dec[0].text).toBe(data[0].text);
    });

    it("should NOT encode an empty text", () => {
      const data: BatchTexts = [{ metadata: {}, text: "" }];
      expect(() => encodeBatchTexts(data)).toThrow("Cant encode empty text.");
    });
  });

  describe("batch values", () => {
    it("should encode & decode properly", () => {
      const dim = 64;
      const data: BatchVectors = [
        { metadata: { foo: "bar1", age: 20, is: true }, vector: randomVector(dim) },
        { metadata: { foo: "bar2", age: 40, is: false }, vector: randomVector(dim) },
      ];

      const enc = encodeBatchVectors(data);
      expect(enc).toBeString();

      const dec = decodeBatchVectors(enc);
      dec.forEach((d, i) => {
        expect(d.vector.length).toBe(data[i].vector.length);
        d.vector.forEach((v, j) => {
          // IMPORTANT: since we are using floats in the protobuf,
          // we expect some slight errors here but nevertheless the numbers
          // should be close to eachother
          expect(v).toBeCloseTo(data[i].vector[j]);
        });

        expect(d.metadata).toEqual(data[i].metadata);
      });
    });

    it("should encode & decode without metadata", () => {
      const data: BatchVectors = [{ metadata: {}, vector: [1, 2, 3, 4, 5] }];

      const enc = encodeBatchVectors(data);
      expect(enc).toBeString();

      const dec = decodeBatchVectors(enc);
      expect(dec.length).toBe(1);
      expect(dec[0].metadata).toBeEmptyObject();
      expect(dec[0].vector).toEqual(data[0].vector);
    });

    it("should NOT encode an empty vector", () => {
      const data: BatchVectors = [{ metadata: {}, vector: [] }];
      expect(() => encodeBatchVectors(data)).toThrow("Cant encode empty vector.");
    });
  });
});
