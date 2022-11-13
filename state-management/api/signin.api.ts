import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "@prisma/client";

import { signinEndpoint } from "utils";
import { SigninType } from "schemas";
import { ApiResponseType } from "types";

export const signinApi = createApi({
  reducerPath: "signinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    signin: build.mutation<ApiResponseType<{ token: string }>, SigninType>({
      query: (body) => ({
        url: signinEndpoint,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSigninMutation } = signinApi;
