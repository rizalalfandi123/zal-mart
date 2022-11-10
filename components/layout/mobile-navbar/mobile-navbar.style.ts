import { colors, SxProps, Theme } from "@mui/material";

export const navbarContainerStyle: SxProps<Theme> = ({ breakpoints, palette }) => ({
  position: "fixed",
  zIndex: 100,
  bottom: 0,
  left: 0,
  right: 0,
  height: "6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: palette.background.default,
  [breakpoints.up("md")]: {
    display: "none",
  },
});

export const bottomNavigationActionStyle: SxProps<Theme> = {
  "& .MuiBottomNavigationAction-label.Mui-selected": {
    fontSize: "12px !important",
  },
};
