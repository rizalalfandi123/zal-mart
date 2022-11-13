import { SxProps, Theme } from "@mui/material";

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
  width: "3.4rem",
  height: "2.4rem",
  color: "white",
  fontSize: "1.5rem",
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

export const rightContentStyle: SxProps<Theme> = ({ breakpoints }) => ({
  marginLeft: "1rem",
  [breakpoints.down("lg")]: {
    marginLeft: "0.6rem",
  },
});

export const searchFieldStyle: SxProps<Theme> = {
  paddingRight: "4px",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
};
