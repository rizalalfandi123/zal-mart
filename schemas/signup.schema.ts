import { z } from "zod";

export const signupSchema = z.object({
  name: z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }),
  email: z
    .string({ required_error: "Email is required", invalid_type_error: "Email must be a string" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required", invalid_type_error: "Password must be a string" })
    .min(8, "Password minimum 8 characters"),
});
