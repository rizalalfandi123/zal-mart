import { z } from "zod";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { signupEndpoint } from "utils";
import { signupSchema } from "schemas";

type SignupType = z.infer<typeof signupSchema>;
type SignupResponseType = {
  message: string;
  status: "success" | "error";
  data: object;
};

export const signupApi = createApi({
  reducerPath: "signupApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    register: build.mutation<SignupResponseType, SignupType>({
      query: (body) => ({
        url: signupEndpoint,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = signupApi;
