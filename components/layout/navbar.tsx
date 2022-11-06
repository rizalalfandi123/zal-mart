import { ComponentProps, FunctionComponent } from "react";
import { useRouter } from "next/router";

import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

type NavbarType = FunctionComponent<ComponentProps<"nav">>;

export const Navbar: NavbarType = () => {
  const pathname = useRouter().pathname;
  const authPage = pathname === "/auth/signin" || pathname === "/auth/signup";

  if (authPage) return null;

  return (
    <nav>
      <MobileNavbar />
      <DesktopNavbar />
    </nav>
  );
};
