import { NextPage } from "next";

import Grid from "@mui/material/Unstable_Grid2";

import { Banner } from "page-components";
import { DashboardCard } from "components";
import "swiper/css/grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid as SwiperGrid } from "swiper";
import { colors, Typography, styled } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid xs={12}>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "1rem",
            marginTop: "1rem",
            borderRadius: "1rem",
            boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", alignItems: "center" }}>
            <Typography variant="h5" fontWeight={500}>
              Brands
            </Typography>
            <Typography fontWeight={500}>See all</Typography>
          </Box>
          <Swiper navigation modules={[Navigation]} slidesPerView="auto" spaceBetween={12}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <SwiperSlide
                key={i}
                style={{
                  height: "16rem",
                  border: `1px solid ${colors.grey[300]}`,
                  width: "12rem",
                  borderRadius: "1rem",
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "12rem",
                    position: "relative",
                    borderTopRightRadius: "1rem",
                    borderTopLeftRadius: "1rem",
                  }}
                >
                  <Image alt="xiomi" fill src="https://logotyp.us/files/xiaomi.svg" style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ height: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography variant="h6">Xiomi</Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", alignItems: "center" }}>
            <Typography variant="h5" fontWeight={500}>
              Brands
            </Typography>
            <Typography fontWeight={500}>See all</Typography>
          </Box>
          <Swiper
            navigation
            slidesPerView="auto"
            grid={{
              rows: 2,
            }}
            spaceBetween={12}
            modules={[SwiperGrid, Navigation]}
            style={{
              height: "34rem",
            }}
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <SwiperSlide
                key={i}
                style={{
                  height: "16rem",
                  border: `1px solid ${colors.grey[300]}`,
                  width: "12rem",
                  borderRadius: "1rem",
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "12rem",
                    position: "relative",
                    borderTopRightRadius: "1rem",
                    borderTopLeftRadius: "1rem",
                  }}
                >
                  <Image alt="xiomi" fill src="https://logotyp.us/files/xiaomi.svg" style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ height: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography variant="h6">Xiomi</Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
