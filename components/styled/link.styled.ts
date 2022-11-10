import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "@mui/material";

export const Link = styled(NextLink)<NextLinkProps>(({ theme: { palette } }) => ({
  textDecoration: "none",
  fontSize: "0.875rem",
  color: palette.primary.main,
}));
