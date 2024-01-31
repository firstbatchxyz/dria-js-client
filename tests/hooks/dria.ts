import { beforeAll } from "bun:test";
import { Dria } from "../../src";

export function setupDria(contractId: string) {
  let dria: Dria;

  beforeAll(() => {
    dria = new Dria({ contractId });
  });

  return () => ({ dria });
}
