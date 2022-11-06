import { styled } from "@mui/material";
import { ComponentProps } from "react";

export const AuthFormContainer = styled("form")<ComponentProps<"form">>(({ theme: { breakpoints, palette } }) => ({
  width: "100%",
  maxWidth: "480px",
  [breakpoints.up("md")]: {
    WebkitBoxShadow: "rgb(0 0 0 / 12%) 0px 1px 6px 0px",
    MozBoxShadow: "rgb(0 0 0 / 12%) 0px 1px 6px 0px",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: palette.background.default,
  },
}));
