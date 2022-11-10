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
    label: "Products",
    icon: <CategoryRoundedIcon />,
    pathname: "/products",
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
      <BottomNavigation
        showLabels
        value={router.pathname}
        sx={{
          backgroundColor: "white",
          boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
          width: "100%",
          borderRadius: "1rem",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
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
