import { Dria } from "../../src";

// Contract of a TypeScript Book uploaded to Dria
const contractId = "-B64DjhUtCwBdXSpsRytlRQCu-bie-vSTvTIT8Ap3g0";

export const dria = new Dria<{ id: string; page: string; text: string }>({ contractId });

export function randomVector(dim: number) {
  return Array.from({ length: dim }, () => Math.random());
}
