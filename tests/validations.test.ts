import { beforeAll, describe, it } from "bun:test";
import { Dria } from "../src";
import { setupDria } from "./hooks/dria";

describe("validation tests", () => {
  const driaHook = setupDria("-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0");
  let dria: Dria;

  beforeAll(() => {
    dria = driaHook().dria;
  });

  describe("fetch", () => {
    it.todo("should NOT fetch with no ids", async () => {});
  });

  describe("search", () => {
    it.todo("should NOT search with bad topK", async () => {});
    it.todo("should NOT search with bad level", async () => {});
  });

  describe.todo("query", () => {});
});
