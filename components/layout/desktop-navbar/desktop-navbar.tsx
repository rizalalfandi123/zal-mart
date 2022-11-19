import type { UrlObject } from "url";

import { useRouter } from "next/router";

import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Unstable_Grid2";

import { Link, Button, Modal } from "components";
import UserMenu from "./user-menu";
import {
  searchFieldStyle,
  searchIconStyle,
  buttonCategoriesStyle,
  navbarBrandStyle,
  navbarContainerStyle,
  rightContentStyle,
  searchbarStyle,
  centerContentStyle,
  navbarStyle,
} from "./desktop-navbar.style";
import { SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

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
    style: { padding: "13px 14px" },
  },
};

const appMenuStyle: SxProps<Theme> = ({}) => ({
  // borderColor
});

export const DesktopNavbar = () => {
  const router = useRouter();
  const modalName = "app-menu";

  const handleClickOpenModal = () => {
    const url: UrlObject = { pathname: router.pathname, query: { [modalName]: true } };
    router.push(url, undefined, { shallow: true });
  };

  return (
    <>
      <Box sx={navbarContainerStyle}>
        <Box sx={navbarStyle}>
          <Toolbar>
            <Link href="/">
              <Typography sx={navbarBrandStyle}>ZAL MART</Typography>
            </Link>
            <Box sx={centerContentStyle}>
              <Box sx={searchbarStyle}>
                <Button variant="outlined" size="small" sx={buttonCategoriesStyle}>
                  Categories
                </Button>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search"
                  InputProps={SearchFieldInputProps}
                  fullWidth
                />
              </Box>
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

const AppMenu = () => {
  const router = useRouter();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const modalName = "app-menu";

  const handleClickOpenModal = () => {
    const url: UrlObject = { pathname: router.pathname, query: { [modalName]: true } };
    router.push(url, undefined, { shallow: true });
  };

  const appMenuStyle: SxProps<Theme> = ({ palette }) => ({
    display: "flex",
    aspectRatio: "1/1",
    borderRadius: "1rem",
    backgroundColor: "white",
    boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    ":hover": {
      border: `1px solid ${palette.primary.main}`,
    },
  });

  const appMenuIconStyle: SxProps<Theme> = ({ palette, breakpoints }) => ({
    fontSize: "8rem",
    margin: "4px",
    color: palette.primary.main,
  });

  const appMenuTitleStyle: SxProps<Theme> = ({ breakpoints }) => ({
    fontSize: "1rem",
    textAlign: "center",
  });

  if (mobileView) return null;

  return (
    <>
      <Tooltip title="Apps Menu">
        <IconButton onClick={handleClickOpenModal}>
          <GridViewRoundedIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Modal maxWidth="md" title="Menu" name={modalName}>
        <Grid container spacing={2}>
          {Array.from(Array(8)).map(() => (
            <Grid xs={4}>
              <Box sx={appMenuStyle}>
                <DashboardRoundedIcon sx={appMenuIconStyle} />
                <Typography sx={appMenuTitleStyle}>Dashboard Admin</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Modal>
    </>
  );
};
