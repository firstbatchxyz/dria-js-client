import { z } from "zod";

const text = z.string();
const vector = z.array(z.number());
const metadataValue = z.union([z.number(), z.string(), z.boolean()]);
const metadata = z.record(z.string(), metadataValue).optional().default({});
const topK = z.number().int().positive().max(20).optional().default(10);
const rerank = z.boolean().optional().default(true);
const level = z.number().int().positive().max(4).optional().default(2);
const field = z.string().optional();

export const SearchOptions = z.object({ topK, rerank, field, level });
export type SearchOptions = z.infer<typeof SearchOptions>;

export const QueryOptions = z.object({ topK });
export type QueryOptions = z.infer<typeof QueryOptions>;

export const BatchTexts = z.array(z.object({ text, metadata })).max(1000);
export type BatchTexts = z.infer<typeof BatchTexts>;

export const BatchVectors = z.array(z.object({ vector, metadata })).max(1000);
export type BatchVectors = z.infer<typeof BatchVectors>;
