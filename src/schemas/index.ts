import { z } from "zod";

const text = z.string();
const vector = z.array(z.number());

const metadataValue = z.union([z.number(), z.string(), z.boolean()]).optional();
const metadata = z.record(z.string(), metadataValue).optional().default({});

const topK = z.number().int().positive().max(20).default(10);
const rerank = z.boolean().default(true);
const level = z.number().int().min(0).max(4).default(1);
const field = z.string().optional();

// NOTE: for some of the types below we may use `z.input` instead of `z.infer`,
// see why in this example: https://github.com/colinhacks/zod/issues/2491#issuecomment-1580726666

export const SearchOptions = z.object({ topK, rerank, field, level });
export type SearchOptions = z.input<typeof SearchOptions>;

export const QueryOptions = z.object({ topK });
export type QueryOptions = z.input<typeof QueryOptions>;

export const BatchTexts = z.array(z.object({ text, metadata })).max(1000);
export type BatchTexts = z.infer<typeof BatchTexts>;

export const BatchVectors = z.array(z.object({ vector, metadata })).max(1000);
export type BatchVectors = z.infer<typeof BatchVectors>;
