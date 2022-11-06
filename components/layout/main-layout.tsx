import { ComponentProps, FunctionComponent, ReactNode } from "react";
import { styled } from "@mui/material";

import { Navbar } from "./navbar";

type LayoutType = FunctionComponent<{ children: ReactNode }>;

const Main = styled("main")<ComponentProps<"main">>(({ theme: { breakpoints } }) => ({
  maxWidth: breakpoints.values.xl + "px",
  paddingTop: "8px",
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "auto",
  paddingBottom: "96px",
  [breakpoints.up("md")]: {
    paddingTop: "96px",
    paddingBottom: 0,
  },
}));

export const Layout: LayoutType = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
