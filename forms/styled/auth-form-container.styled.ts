import { styled } from "@mui/material";
import { ComponentProps } from "react";

export const AuthFormContainer = styled("form")<ComponentProps<"form">>(({ theme: { breakpoints } }) => ({
  width: "100%",
  [breakpoints.up("md")]: {
    maxWidth: "480px",
    boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "white",
  },
}));
