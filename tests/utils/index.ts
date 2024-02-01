import { expect } from "bun:test";

/** Generate a random vector.
 * @param dim dimension of the vector
 */
export function randomVector(dim: number) {
  return Array.from({ length: dim }, () => Math.random());
}

/** Asserts that values between two vectors are close to eachother.
 * @param a vector
 * @param b vetor
 */
export function expectVectorsToBeClose(a: number[], b: number[]) {
  expect(a.length).toBe(b.length);
  for (let i = 0; i < a.length; ++i) {
    expect(a[i]).toBeCloseTo(b[i]);
  }
}
