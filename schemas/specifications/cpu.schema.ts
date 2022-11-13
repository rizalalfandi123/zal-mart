import { z } from "zod";

export const cpuSchema = z
  .object({
    name: z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }),
    description: z.string().nullable(),
    image: z.string().nullable(),
  })
  .required();

export type CpuType = z.infer<typeof cpuSchema>;
