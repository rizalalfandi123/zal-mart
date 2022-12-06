import { Fragment, ReactNode } from "react";
import type { UrlObject } from "url";

import { NextPage } from "next";
import { useRouter } from "next/router";

import Grid from "@mui/material/Unstable_Grid2";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StayCurrentPortraitRoundedIcon from "@mui/icons-material/StayCurrentPortraitRounded";
import SourceRoundedIcon from "@mui/icons-material/SourceRounded";

import { CpuIcon } from "components";
import { Products } from "page-components";

type DashboardMenuItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  children?: Omit<DashboardMenuItem, "children">[];
};

const dashboardContainerStyle: SxProps<Theme> = { height: "inherit", marginBottom: "0.5rem" };

const dashboardNavStyle: SxProps<Theme> = {
  minHeight: "100%",
  backgroundColor: "white",
  boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
  borderRadius: "1rem",
};

const dashboardContentStyle: SxProps<Theme> = {
  ...dashboardNavStyle,
  padding: "1rem"
};

const listItemStyle: SxProps<Theme> = ({ palette }) => ({
  margin: "4px 1rem",
  "&.Mui-selected": {
    color: palette.primary.main,
  },
});

const listSubItemStyle: SxProps<Theme> = (theme) => ({
  ...listItemStyle(theme),
  paddingLeft: 4,
});

const selectedItemStyle: SxProps<Theme> = { color: "inherit" };

const Dashboard: NextPage = () => {
  const router = useRouter();

  const dashboardMenuItem: DashboardMenuItem[] = [
    {
      icon: <LeaderboardIcon />,
      title: "Overview",
      content: <>Inbox</>,
    },
    {
      icon: <StayCurrentPortraitRoundedIcon />,
      title: "Products",
      content: <Products />,
    },
    {
      icon: <SourceRoundedIcon />,
      title: "Specification",
      content: <>Drafts</>,
      children: [
        {
          icon: <CpuIcon />,
          title: "Cpu",
          content: <>Inbox</>,
        },
        {
          icon: <StarBorder />,
          title: "Start",
          content: <>Start</>,
        },
      ],
    },
  ];

  const content = () => {
    const activeItem = router.query["item"];
    const activeSubItem = router.query["sub-item"];
    const item = dashboardMenuItem.find(({ title }) => title === activeItem);

    if (item && !activeSubItem) return item.content;

    if (activeSubItem) {
      let subItemContent: ReactNode = null;
      const itemsWithChildren = dashboardMenuItem.filter(({ children }) => children !== undefined);

      itemsWithChildren.forEach(({ children }) => {
        children?.map(({ title, content }) => {
          if (title === activeSubItem) {
            subItemContent = content;
          }
        });
      });

      return subItemContent;
    }

    return null;
  };

  return (
    <Grid container direction="row" spacing={2} sx={dashboardContainerStyle}>
      <Grid xs={3}>
        <Box sx={dashboardNavStyle}>
          <List component="nav">
            {dashboardMenuItem.map(({ icon, title, children }, index) => {
              const selected = router.query["item"] === title;

              const selectedWithChildren = router.query["item"] === title && !router.query["sub-item"];

              const openExpand = router.query["expand"] === "true" && selected;

              const handleClickItem = () => {
                const url: UrlObject = { pathname: router.pathname, query: { item: title } };
                router.push(url);
              };

              const handleClickExpand = () => {
                const expand = openExpand ? "false" : "true";
                const url: UrlObject = { pathname: router.pathname, query: { item: title, expand } };
                router.push(url);
              };

              return (
                <Fragment key={index}>
                  <ListItemButton
                    onClick={children ? handleClickExpand : handleClickItem}
                    selected={children ? selectedWithChildren : selected}
                    sx={listItemStyle}
                  >
                    <ListItemIcon sx={selectedItemStyle}>{icon}</ListItemIcon>
                    <ListItemText primary={<Typography sx={selectedItemStyle}>{title}</Typography>} />
                    {children && <>{openExpand ? <ExpandLess /> : <ExpandMore />}</>}
                  </ListItemButton>
                  {children && (
                    <Collapse in={openExpand} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {children.map(({ icon, title: subTitle }, index) => {
                          const handleClickSubItem = () => {
                            const url: UrlObject = {
                              pathname: router.pathname,
                              query: { item: title, expand: "true", "sub-item": subTitle },
                            };
                            router.push(url);
                          };

                          const selected = router.query["sub-item"] === subTitle;

                          return (
                            <ListItemButton
                              key={index}
                              onClick={handleClickSubItem}
                              selected={selected}
                              sx={listSubItemStyle}
                            >
                              <ListItemIcon sx={selectedItemStyle}>{icon}</ListItemIcon>
                              <ListItemText primary={<Typography sx={selectedItemStyle}>{subTitle}</Typography>} />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  )}
                </Fragment>
              );
            })}
          </List>
        </Box>
      </Grid>
      <Grid xs={9}>
        <Box sx={dashboardContentStyle}>{content()}</Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
