import { z } from "zod";

const topKSchema = z
  .number({
    invalid_type_error: "K must be in range [0, 20).",
  })
  .int()
  .positive()
  .max(19)
  .default(10)
  .optional();

export const SearchOptions = z
  .object({
    topK: topKSchema,
    rerank: z.boolean().default(true).optional(),
  })
  .optional();
export type SearchOptions = z.infer<typeof SearchOptions>;

export const QueryOptions = z
  .object({
    topK: topKSchema,
    level: z
      .number({
        invalid_type_error: "Level must be an integer, one of: 1, 2, 3, 4.",
      })
      .int()
      .min(1)
      .max(4)
      .default(2)
      .optional(),
  })
  .optional();
export type QueryOptions = z.infer<typeof QueryOptions>;
