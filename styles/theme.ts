import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    allVariants: {
      color: "#334155",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1280,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 16,
  },
  palette: {
    primary: {
      main: "#818cf8",
    },
    error: {
      main: "#f87171",
    },
    background: {
      default: "#f8fafc",
    },
  },
  // shadows: [],
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "rgb(90, 98, 173)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontWeight: "bold",
          letterSpacing: 1.2,
          textTransform: "none",
          ":hover": {
            boxShadow: "none",
          },
          ":disabled": {
            backgroundColor: "#cbd5e1",
            color: "#64748b",
          },
        },
        contained: {
          color: "white",
        },
        outlinedSizeLarge: {
          borderWidth: 2,
          ":hover": {
            borderWidth: 2,
          },
        },
        sizeLarge: {
          padding: "1rem 2rem",
        },
      },
      variants: [
        {
          props: { size: "medium" },
          style: {
            padding: "8px 16px",
          },
        },
      ],
    },
  },
});
