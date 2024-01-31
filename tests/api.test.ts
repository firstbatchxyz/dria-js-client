import { beforeAll, describe, it } from "bun:test";
import { Dria } from "../src";
import { setupDria } from "./hooks/dria";

describe("api tests", () => {
  const driaHook = setupDria("-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0");
  let dria: Dria;

  beforeAll(() => {
    dria = driaHook().dria;
  });

  describe("fetch", () => {
    it("should fetch", async () => {
      const res = await dria.fetch([0, 1, 2]);
      console.log(res);
    });
  });

  describe.todo("search", () => {});

  describe.todo("query", () => {});
});
