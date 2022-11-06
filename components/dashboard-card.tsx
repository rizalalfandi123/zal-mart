import Image from "next/image";
import { FunctionComponent } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Box, colors, Typography } from "@mui/material";
import { Link } from "components";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export const DashboardCard: FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8fafc",
        WebkitBoxShadow: "rgb(0 0 0 / 12%) 0px 1px 6px 0px",
        MozBoxShadow: "rgb(0 0 0 / 12%) 0px 1px 6px 0px",
        borderRadius: "1rem",
      }}
    >
      <Grid container direction="column">
        <Grid xs={12} container justifyContent="space-between" alignItems="center">
          <Grid>
            <Typography variant="h6" fontWeight="600">
              Flash Sale
            </Typography>
          </Grid>
          <Grid>
            <Link href="/categories">See More</Link>
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ display: "flex", gap: 1, overflowY: "auto" }}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <Box
              sx={{
                height: "20rem",
                width: "12rem",
                WebkitBoxShadow: "0px 0px 8px 0px rgba(0,0,0,0.05)",
                MozBoxShadow: "0px 0px 8px 0px rgba(0,0,0,0.05)",
                border: `1px solid ${colors.grey[200]}`,
                borderRadius: "1rem",
                display: "inline-block",
                flexShrink: 0,
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <Box sx={{ position: "relative", width: "100%", height: "12rem" }}>
                <Image
                  alt="test"
                  fill
                  style={{ objectFit: "cover", borderTopRightRadius: "1rem", borderTopLeftRadius: "1rem" }}
                  src="https://telset.id/wp-content/uploads/2021/12/Spesifikasi-Harga-Xiaomi-12-1-696x582.jpg"
                />
              </Box>
              <Box
                sx={{
                  padding: "8px",
                  display: "flex",
                  height: "8rem",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography
                  sx={{
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  Xiomi 12 24GB Baru Termurah
                </Typography>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: "700" }}>Rp. 1.222.200.000,-</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StarRoundedIcon sx={{ color: "#eab308" }} />
                  <Typography sx={{ color: "#424d5e" }}>4.9 | 690 Sold</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
