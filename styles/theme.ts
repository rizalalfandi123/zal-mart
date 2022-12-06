import { createTheme, SxProps, Theme } from "@mui/material";

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

const menuPaperStype: SxProps<Theme> = () => ({
  width: "16rem",
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  marginTop: 2,
  "& .MuiAvatar-root": {
    marginRight: 1,
  },
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
  "& .MuiMenuItem-root": {
    minHeight: "2rem",
    marginLeft: "8px",
    marginRight: "8px",
    padding: "8px",
    borderRadius: "0.8rem",
    ":hover": {
      backgroundColor: "#e0e7ff",
    },
  },
});

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
    borderRadius: 12,
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
    MuiMenu: {
      defaultProps: {
        PaperProps: {
          sx: menuPaperStype,
          elevation: 0,
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
      },
      variants: [
        {
          props: { size: "medium" },
          style: {
            padding: "6px 18px",
          },
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
          "&.Mui-selected": {
            backgroundColor: "#e0e7ff",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "36px",
        },
      },
    },
  },
});
