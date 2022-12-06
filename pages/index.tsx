import { CSSProperties } from "react";
import { NextPage } from "next";
import "swiper/css/grid";

import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid as SwiperGrid } from "swiper";

import { BrandCard, ProductCard, Link } from "components";
import type { BrandCardItemType } from "types";

const brandCardSwipperStyle: CSSProperties = {
  height: "fit-content",
  width: "fit-content",
};

const producCardSwipperStyle: CSSProperties = {
  height: "100%",
};

const brandContainerStyle: SxProps<Theme> = {
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
};

const newArrivalContainerStyle: SxProps<Theme> = ({ breakpoints }) => ({
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
  height: "52rem",
  [breakpoints.down("md")]: {
    height: "42rem",
  },
});

const boxContainerTitleStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1rem",
  alignItems: "center",
};

const brandCardItems: BrandCardItemType[] = [
  ...[1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => ({
    name: "Xiomi",
    imageUrl: "https://logotyp.us/files/xiaomi.svg",
  })),
];

const Home: NextPage = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid xs={12}>
        <Box sx={brandContainerStyle}>
          <Box sx={boxContainerTitleStyle}>
            <Typography variant="h6">Brands</Typography>
            <Link href="/brands">See all</Link>
          </Box>
          <Swiper navigation modules={[Navigation]} slidesPerView="auto" spaceBetween={12}>
            {brandCardItems.map(({ imageUrl, name }, index) => (
              <SwiperSlide style={brandCardSwipperStyle} key={index}>
                <BrandCard imageUrl={imageUrl} name={name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={newArrivalContainerStyle}>
          <Box sx={boxContainerTitleStyle}>
            <Typography variant="h6">New Arrivals</Typography>
            <Link href="/brands">See all</Link>
          </Box>
          <Swiper
            navigation
            slidesPerView="auto"
            grid={{
              rows: 2,
            }}
            spaceBetween={12}
            modules={[SwiperGrid, Navigation]}
            style={producCardSwipperStyle}
          >
            {brandCardItems.map(({ imageUrl, name }, index) => (
              <SwiperSlide style={brandCardSwipperStyle} key={index}>
                <ProductCard
                  imageUrl={"https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-plus-1.jpg"}
                  name="Xiaomi Redmi Note 12 Pro+"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
