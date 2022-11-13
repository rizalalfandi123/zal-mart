import { FunctionComponent } from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress } from "@mui/material";

type ButtonType = FunctionComponent<MuiButtonProps & { loading?: boolean; loadingSize?: string }>;

export const Button: ButtonType = ({ loading, loadingSize, children, ...props }) => {
  const loadingChildren = <CircularProgress size={loadingSize || "1.4rem"} style={{ color: "white" }} />;
  const buttonChildren = loading ? loadingChildren : children;

  return <MuiButton {...props}>{buttonChildren}</MuiButton>;
};
