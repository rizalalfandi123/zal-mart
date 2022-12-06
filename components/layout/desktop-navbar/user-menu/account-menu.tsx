import { useState } from "react";
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
  width: 32,
  height: 32,
};

export const AccountMenu: AccountMenuType = (props) => {
  const { name } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
          <IconButton onClick={handleClick}>{avatar}</IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
