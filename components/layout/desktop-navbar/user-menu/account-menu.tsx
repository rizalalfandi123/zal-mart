import * as React from "react";
import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import { User } from "@prisma/client";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { SxProps, Theme } from "@mui/material";

type AccountMenuType = FunctionComponent<User>;
type AccountMenuItemType = { name: string; icon: ReactNode; onClick: MouseEventHandler<HTMLLIElement> };

const avatarStyle: SxProps<Theme> = {
  width: 36,
  height: 36,
};

const paperStype: SxProps<Theme> = () => ({
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
    minHeight: "3rem",
    marginLeft: "8px",
    marginRight: "8px",
    padding: "8px",
    borderRadius: "1rem",
    ":hover": {
      backgroundColor: "#e0e7ff",
    },
  },
});

export const AccountMenu: AccountMenuType = (props) => {
  const { name } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const avatar = <Avatar sx={avatarStyle}>{name.substring(0, 1).toUpperCase()}</Avatar>;

  const accountMenuItems: AccountMenuItemType[] = [
    {
      name: "Setting",
      icon: <Settings />,
      onClick: (e) => {},
    },
    {
      name: "Logout",
      icon: <Logout />,
      onClick: (e) => {},
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account Menu">
          <IconButton
            onClick={handleClick}
            // size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {avatar}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: paperStype,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          {avatar} {name}
        </MenuItem>
        <Divider />
        {accountMenuItems.map(({ icon, name, onClick }, index) => (
          <MenuItem onClick={onClick} key={index}>
            <ListItemIcon>{icon}</ListItemIcon>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
