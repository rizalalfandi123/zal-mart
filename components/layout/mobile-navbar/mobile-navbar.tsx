import { useRouter } from "next/router";

import BottomNavigationAction, { BottomNavigationActionProps } from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";

import { navbarContainerStyle, bottomNavigationActionStyle } from "./mobile-navbar.style";

type NavbarItemType = BottomNavigationActionProps & { pathname: string };

const navbarItems: NavbarItemType[] = [
  {
    label: "Home",
    icon: <HomeRoundedIcon />,
    pathname: "/",
  },
  {
    label: "Categories",
    icon: <CategoryRoundedIcon />,
    pathname: "/categories",
  },
  {
    label: "Transactions",
    icon: <ShoppingBagRoundedIcon />,
    pathname: "/transactions",
  },
  {
    label: "Profile",
    icon: <Person2RoundedIcon />,
    pathname: "/profile",
  },
];

export const MobileNavbar = () => {
  const router = useRouter();

  return (
    <Box sx={navbarContainerStyle}>
      <BottomNavigation showLabels value={router.pathname}>
        {navbarItems.map(({ pathname, ...props }, index) => (
          <BottomNavigationAction
            {...props}
            key={index}
            value={pathname}
            onClick={() => router.push(pathname)}
            sx={bottomNavigationActionStyle}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};
