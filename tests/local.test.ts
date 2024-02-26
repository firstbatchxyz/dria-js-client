import { expect, describe, it } from "bun:test";
import { randomVector } from "./utils";
import { DriaLocal } from "../src";

// you can setup a local Dria service via the Dria CLI (https://www.npmjs.com/package/dria-cli)
// $ dria pull WbcY2a-KfDpk7fsgumUtLC2bu4NQcVzNlXWi13fPMlU
// $ dria serve WbcY2a-KfDpk7fsgumUtLC2bu4NQcVzNlXWi13fPMlU

// these tests are skipped unless specified with process.env.LOCAL_TEST
const testLocal = process.env.LOCAL_TEST ?? false;
(testLocal ? describe : describe.skip)("local client", () => {
  type MetadataType = { id: string; page: string; text: string };
  const dria = new DriaLocal<MetadataType>();

  it("should be healthy", async () => {
    const res = await dria.health();
    expect(res).toBe(true);
  });

  it("should fetch with ids", async () => {
    const ids = [0, 1, 2];
    const res = await dria.fetch(ids);
    res.forEach((r) => {
      expect(r.id).toBeString();
      expect(r.text).toBeString();
    });
  });

  it("should query with a vector", async () => {
    const vector = randomVector(768);
    const res = await dria.query(vector);
    expect(res.length).toBe(10); // default topK
    res.forEach((r) => {
      expect(r.id).toBeNumber();
      expect(r.score).toBeNumber();
      expect(r.metadata).toBeObject();
      // TODO: test more metadata fields here
    });
  });
});
