import { FC } from "react";
import { styled } from "@mui/system";
import {
  SnackbarProvider as NotistackSnackbarProvider,
  SnackbarProviderProps as NotistackSnackbarProviderProps,
} from "notistack";

const StyledSnackbarProvider = styled(NotistackSnackbarProvider)<NotistackSnackbarProviderProps>`
  &.SnackbarItem-contentRoot {
    border-radius: 1rem;
    box-shadow: none;
  }
  &.SnackbarItem-variantSuccess {
    background-color: #818cf8;
  }
  &.SnackbarItem-variantError {
    background-color: #f87171;
  }
`;

export const SnackbarProvider: FC<NotistackSnackbarProviderProps> = (props) => (
  <StyledSnackbarProvider
    {...props}
    maxSnack={3}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    autoHideDuration={3000}
  />
);
