import { signinSchema } from "schemas";
import { z } from "zod";

export type SigninType = z.infer<typeof signinSchema>;

