import type { CSSProperties } from "react";
import type { SxProps, Theme } from "@mui/material";

import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

import { Link } from "components";
import UserMenu from "./user-menu";
import { AppMenu } from "./app-menu";

export const navbarContainerStyle: SxProps<Theme> = ({ breakpoints, palette }) => ({
  zIndex: 100,
  boxShadow: "none",
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  height: "6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: palette.background.default,
  [breakpoints.down("md")]: {
    display: "none",
  },
});

export const searchIconStyle: SxProps<Theme> = ({ palette }) => ({
  backgroundColor: palette.primary.main,
  borderRadius: "12px",
  width: "2.8rem",
  height: "2.2rem",
  color: "white",
  fontSize: "1.5rem",
  ":hover": {
    backgroundColor: palette.primary.main,
    opacity: 0.9,
  },
});

export const searchbarStyle: SxProps<Theme> = ({ breakpoints }) => ({
  display: "flex",
  width: "60%",
  [breakpoints.down("lg")]: {
    width: "75%",
  },
});

export const centerContentStyle: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const navbarBrandStyle: SxProps<Theme> = ({ palette, breakpoints }) => ({
  marginRight: "1rem",
  fontWeight: 800,
  fontSize: "1.25rem",
  ":hover": {
    color: palette.primary.main,
  },
  [breakpoints.down("lg")]: {
    marginRight: "0.6rem",
    fontSize: "1.1rem",
  },
});

export const buttonCategoriesStyle: SxProps<Theme> = {
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
  borderRight: "none",
  fontWeight: 500,
  fontSize: "0.875rem",
  ":hover": {
    borderRight: "none",
  },
};

export const rightContentStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const searchFieldStyle: SxProps<Theme> = ({ breakpoints }) => ({
  paddingRight: "4px",
  width: "60%",
  margin: "auto",
  [breakpoints.down("lg")]: {
    width: "75%",
  },
});

export const navbarStyle: SxProps<Theme> = {
  width: "100%",
  marginLeft: "1rem",
  marginRight: "1rem",
  borderRadius: "1rem",
  backgroundColor: "white",
  boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
};

const searchInputStyle: CSSProperties = { padding: "12px 14px" };

const SearchFieldInputProps: Partial<OutlinedInputProps> = {
  endAdornment: (
    <InputAdornment position="end">
      <IconButton sx={searchIconStyle}>
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </InputAdornment>
  ),
  sx: searchFieldStyle,
  inputProps: {
    style: searchInputStyle,
  },
};

export const DesktopNavbar = () => {
  return (
    <>
      <Box sx={navbarContainerStyle}>
        <Box sx={navbarStyle}>
          <Toolbar>
            <Link href="/">
              <Typography sx={navbarBrandStyle}>ZAL MART</Typography>
            </Link>
            <Box sx={centerContentStyle}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={SearchFieldInputProps}
                fullWidth
              />
            </Box>

            <Box sx={rightContentStyle}>
              <AppMenu />
              <UserMenu />
            </Box>
          </Toolbar>
        </Box>
      </Box>
    </>
  );
};


