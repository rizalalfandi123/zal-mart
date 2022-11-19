import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    allVariants: {
      color: "#334155",
    },
    fontSize: 12,
    body1: {
      fontSize: "0.875rem",
      fontWeight: "500",
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 420,
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
      default: "#F5F5F9",
    },
  },
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
    MuiTypography: {
      defaultProps: {
        variant: "body1",
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          fontSize: "12px",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          fontWeight: 600,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#818cf8",
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
