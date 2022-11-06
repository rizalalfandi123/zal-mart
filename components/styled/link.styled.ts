import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "@mui/material";

export const Link = styled(NextLink)<NextLinkProps>`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
`;
