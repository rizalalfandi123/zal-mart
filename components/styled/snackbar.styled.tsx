import { FC, FunctionComponent, useEffect } from "react";
import { styled } from "@mui/system";
import {
  SnackbarProvider as NotistackSnackbarProvider,
  SnackbarProviderProps as NotistackSnackbarProviderProps,
  useSnackbar,
} from "notistack";
import { useAppSelector, useAppDispatch, setHideSnackbar } from "state-management";

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

const SnackbarStateTrigger: FunctionComponent = () => {
  const snackbarState = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (snackbarState.data && snackbarState.show) {
      enqueueSnackbar(snackbarState.data.message, { variant: snackbarState.data.variant });

      setTimeout(() => dispatch(setHideSnackbar()), 2 * 1000);
    }
  }, [snackbarState]);

  return null;
};

export const SnackbarProvider: FC<NotistackSnackbarProviderProps> = (props) => {
  const { children } = props;

  return (
    <StyledSnackbarProvider
      {...props}
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={1000 * 2}
    >
      <SnackbarStateTrigger />
      {children}
    </StyledSnackbarProvider>
  );
};
