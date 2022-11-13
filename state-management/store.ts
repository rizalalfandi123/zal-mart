import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, snackbarSlice, authSlice } from "./slices";
import { createLogger } from "redux-logger";
import { signinApi, signupApi } from "./api";

const loggerMiddleware = createLogger({
  colors: {
    prevState: () => "#ef4444",
    action: () => "#0ea5e9",
    nextState: () => "#22c55e",
  },
});

const apiMiddleware = [signinApi.middleware, signupApi.middleware];

const apiReducers = {
  [signupApi.reducerPath]: signupApi.reducer,
  [signinApi.reducerPath]: signinApi.reducer,
};

const sliceReducers = {
  counter: counterSlice.reducer,
  [snackbarSlice.name]: snackbarSlice.reducer,
  [authSlice.name]: authSlice.reducer,
};

export const store = configureStore({
  reducer: {
    ...sliceReducers,
    ...apiReducers,
  },
  middleware: (getDefaultModdleware) => [...getDefaultModdleware(), ...apiMiddleware, loggerMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
