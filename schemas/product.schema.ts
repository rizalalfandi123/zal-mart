import { z } from "zod";

export const productSchema = z.object({
  name: z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }),
  price: z.number({ required_error: "Price is required", invalid_type_error: "Price must be a number" }),
  desc: z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }),
});

export type ProductType = z.infer<typeof productSchema>;
