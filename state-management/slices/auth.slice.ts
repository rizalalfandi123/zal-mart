import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@prisma/client";

import type { RootState } from "state-management";

type AuthState = {
  user?: User;
};

const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export const getAuthState = (state: RootState) => state.auth;
