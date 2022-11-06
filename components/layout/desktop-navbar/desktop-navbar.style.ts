import { SxProps, Theme } from "@mui/material";

export const navbarContainerStyle: SxProps<Theme> = ({ breakpoints, palette }) => ({
  zIndex: 100,
  boxShadow: "none",
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  backgroundColor: palette.background.default,
  [breakpoints.down("md")]: {
    display: "none",
  },
});

export const searchIconStyle: SxProps<Theme> = ({ palette }) => ({
  backgroundColor: palette.primary.main,
  borderRadius: "12px",
  width: "3rem",
  color: "white",
});

export const searchbarStyle: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
};

export const navbarBrandStyle: SxProps<Theme> = ({ palette, breakpoints }) => ({
  marginRight: "2rem",
  fontWeight: 800,
  fontSize: "1.25rem",
  ":hover": {
    color: palette.primary.main,
  },
  [breakpoints.down("lg")]: {
    marginRight: "1rem",
    fontSize: "1.1rem",
  },
});

export const buttonCategoriesStyle: SxProps<Theme> = {
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
  borderRight: "none",
  fontSize: "1rem",
  fontWeight: 500,
  ":hover": {
    borderRight: "none",
  },
};

export const rightContentStyle: SxProps<Theme> = ({ breakpoints }) => ({
  marginLeft: "2rem",
  [breakpoints.down("lg")]: {
    marginLeft: "1rem",
  },
});

export const searchFieldStyle: SxProps<Theme> = {
  paddingRight: "4px",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
};
