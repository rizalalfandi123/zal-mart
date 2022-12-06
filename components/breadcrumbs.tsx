import type { FunctionComponent } from "react";
import type { SxProps, Theme } from "@mui/material";

import { useRouter } from "next/router";

import Typography from "@mui/material/Typography";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export type Breadcrumb = { link: string; title: string };

export const Breadcrumbs: FunctionComponent<{ breadcrumbs: Breadcrumb[] }> = ({ breadcrumbs }) => {
  const router = useRouter();

  const containerStyle: SxProps<Theme> = {
    marginBottom: "12px",
  };

  const linkStyle: SxProps<Theme> = ({ palette }) => ({
    cursor: "pointer",
    ":hover": {
      color: palette.primary.main,
    },
  });

  return (
    <MuiBreadcrumbs sx={containerStyle} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {breadcrumbs.map(({ link, title }, index) => {
        const currentLocation: boolean = router.pathname === link;
        const handleClick = !currentLocation ? () => router.push(link) : undefined;

        return (
          <Typography
            key={index}
            sx={(theme) => ({
              ...linkStyle(theme),
              ...(currentLocation ? { color: theme.palette.primary.main } : {}),
            })}
            onClick={handleClick}
          >
            {title}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
};
