import type { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import type { Breakpoint } from "@mui/material";
import type { UrlObject } from "url";

import { useRouter } from "next/router";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";
import DialogActions, { DialogActionsProps } from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import DialogContent, { DialogContentProps } from "@mui/material/DialogContent";
import { SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";

import { Button } from "components";

type ModalProps = {
  maxWidth: Breakpoint;
  title: string;
  name: string;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogActionsProps?: DialogActionsProps;
};

type ModalType = FunctionComponent<Omit<DialogProps, "maxWidth" | "open"> & ModalProps>;

const dialogTitleStyle: SxProps<Theme> = {
  position: "relative"
};

const iconCloseStyle: SxProps<Theme> = {
  position: "absolute",
  top: "4px",
  right: "4px"
}

const dialogContentStyle: (theme: Theme, maxWidth: Breakpoint) => SxProps<Theme> = ({ breakpoints }, maxWidth) => ({
  width: breakpoints.values[maxWidth] - 48 + "px",
  [breakpoints.down("md")]: {
    width: "100%",
  },
});

const dialogStyle: SxProps<Theme> = ({ palette }) => ({
  "& .MuiPaper-root": {
    backgroundColor: palette.background.default,
  },
});

export const Modal: ModalType = (props) => {
  const { dialogTitleProps, dialogContentProps, dialogActionsProps, ...dialogProps } = props;

  const router = useRouter();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const open = router.query[props.name] === "true";
  const handleClose = () => {
    router.push(router.pathname, undefined, { shallow: true });
  };

  return (
    <Dialog {...dialogProps} open={open} onClose={handleClose} fullScreen={fullScreen} sx={dialogStyle}>
      <DialogTitle {...dialogTitleProps} sx={dialogTitleStyle}>
          <IconButton sx={iconCloseStyle} onClick={handleClose}>
            <CancelRoundedIcon />
          </IconButton>
        {props.title}
      </DialogTitle>
      <DialogContent {...dialogContentProps} sx={(theme) => ({ ...dialogContentStyle(theme, props.maxWidth) })}>
        {props.children}
      </DialogContent>

      <DialogActions {...dialogActionsProps}>
        <Button variant="outlined" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
