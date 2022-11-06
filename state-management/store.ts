import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices";
import { createLogger } from "redux-logger";
import { signupApi } from "./api";

const logger = createLogger({
  colors: {
    prevState: () => "#ef4444",
    action: () => "#0ea5e9",
    nextState: () => "#22c55e",
  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [signupApi.reducerPath]: signupApi.reducer,
  },
  middleware: (getDefaultModdleware) => [...getDefaultModdleware(), logger, signupApi.middleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
