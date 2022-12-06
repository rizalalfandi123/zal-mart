import type { MouseEventHandler } from "react";
import type { UrlObject } from "url";
import type { SxProps, Theme } from "@mui/material";

import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { useMediaQuery, useTheme } from "@mui/material";

import { Modal } from "components";

type AppMenuItem = {
  title: string;
  Icon: typeof DashboardRoundedIcon;
  onClick: MouseEventHandler<HTMLDivElement>;
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

const appMenuIconStyle: SxProps<Theme> = ({ palette }) => ({
  fontSize: "8rem",
  margin: "4px",
  color: palette.primary.main,
});

const appMenuTitleStyle: SxProps<Theme> = {
  fontSize: "1rem",
  textAlign: "center",
};

const iconStyle: SxProps<Theme> = { fontSize: "1.6rem" };

export const AppMenu = () => {
  const router = useRouter();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const modalName = "app-menu";

  const appMenus: AppMenuItem[] = [
    { title: "Admin Dashboard", Icon: DashboardRoundedIcon, onClick: () => router.push("/admin/dashboard") },
  ];

  const handleClickOpenModal = () => {
    const url: UrlObject = { pathname: router.pathname, query: { [modalName]: true } };
    router.push(url, undefined, { shallow: true });
  };

  if (mobileView) return null;

  return (
    <>
      <Tooltip title="Apps Menu">
        <IconButton onClick={handleClickOpenModal}>
          <GridViewRoundedIcon sx={iconStyle} />
        </IconButton>
      </Tooltip>
      <Modal maxWidth="md" title="Menu" name={modalName}>
        <Grid container spacing={2}>
          {appMenus.map(({ Icon, onClick, title }, index) => (
            <Grid xs={4} key={index}>
              <Box sx={appMenuStyle} onClick={onClick}>
                <Icon sx={appMenuIconStyle} />
                <Typography sx={appMenuTitleStyle}>{title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Modal>
    </>
  );
};
