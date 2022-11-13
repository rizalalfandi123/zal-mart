import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { SignupType } from "schemas";
import { signupEndpoint } from "utils";
import { ApiResponseType } from "types";

export const signupApi = createApi({
  reducerPath: "signupApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    register: build.mutation<ApiResponseType<{ token: string }>, SignupType>({
      query: (body) => ({
        url: signupEndpoint,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = signupApi;
