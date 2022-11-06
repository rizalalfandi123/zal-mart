import { SxProps, Theme } from "@mui/material";

export const centeredPageContainer: SxProps<Theme> = {
  width: "100%",
  minHeight: "calc(100vh - 80px)",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
