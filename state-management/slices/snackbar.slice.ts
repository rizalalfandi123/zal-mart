import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SnackbarData = {
  message: string;
  variant: "error" | "success";
};

type SnackbarStateType = {
  show: boolean;
  data?: SnackbarData;
};

const initialState: SnackbarStateType = {
  show: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setShowSnackbar: (state, action: PayloadAction<SnackbarData>) => {
      state.show = true;
      state.data = action.payload;
    },

    setHideSnackbar: (state) => {
      state.show = false;
      state.data = undefined;
    },

    setSnackbarErrorApi: (state, action: PayloadAction<unknown>) => {
      const errorData: any = action.payload;

      if (errorData && errorData.data && errorData.data.message) {
        state.show = true;
        state.data = {
          message: errorData.data.message,
          variant: "error",
        };

        return;
      }

      state.show = true;
      state.data = {
        message: "Internal server error",
        variant: "error",
      };
    },

    setSuccessSnackbar: (state, action: PayloadAction<string>) => {
      state.show = true;
      state.data = {
        variant: "success",
        message: action.payload,
      };
    },
  },
});

export const { setHideSnackbar, setShowSnackbar, setSnackbarErrorApi, setSuccessSnackbar } = snackbarSlice.actions;
