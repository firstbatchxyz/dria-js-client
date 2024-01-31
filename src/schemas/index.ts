import { z } from "zod";

const topKSchema = z
  .number({
    invalid_type_error: "K must be in range [0, 20).",
  })
  .int()
  .positive()
  .max(19)
  .optional()
  .default(10);

export const SearchOptions = z
  .object({
    topK: topKSchema,
    rerank: z.boolean().optional().default(true),
    field: z.string().optional(),
    level: z.number().int().min(1).max(4).optional().default(2),
  })
  .optional();
export type SearchOptions = z.infer<typeof SearchOptions>;

export const QueryOptions = z
  .object({
    topK: topKSchema,
  })
  .optional();
export type QueryOptions = z.infer<typeof QueryOptions>;
