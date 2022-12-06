import type { ComponentProps } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "@mui/material";

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

export const Link = styled(NextLink)<NextLinkProps>(({ theme: { palette } }) => ({
  textDecoration: "none",
  fontSize: "0.875rem",
  color: palette.primary.main,
}));
