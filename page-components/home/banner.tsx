import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material";

const containerBannerStyle: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  height: "20rem",
  position: "relative",
  borderRadius: "1rem",
};

export const Banner = () => {
  return (
    <Swiper
      navigation
      centeredSlides
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Box sx={containerBannerStyle}>
          <Image
            alt="sale"
            fill
            style={{ objectFit: "cover", borderRadius: "1rem" }}
            src="https://images.tokopedia.net/img/cache/1190/wmEwCC/2022/10/27/fb2a16bf-d6de-4a12-9172-0a237588012f.jpg"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={containerBannerStyle}>
          <Image
            alt="sale"
            fill
            style={{ objectFit: "cover", borderRadius: "1rem" }}
            src="https://images.tokopedia.net/img/cache/1190/wmEwCC/2022/10/27/fb2a16bf-d6de-4a12-9172-0a237588012f.jpg"
          />
        </Box>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Box sx={containerBannerStyle}>
          <Image
            alt="sale"
            fill
            style={{ objectFit: "cover", borderRadius: "1rem" }}
            src="https://images.tokopedia.net/img/cache/1190/wmEwCC/2022/10/27/fb2a16bf-d6de-4a12-9172-0a237588012f.jpg"
          />
        </Box>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Box sx={containerBannerStyle}>
          <Image
            alt="sale"
            fill
            style={{ objectFit: "cover", borderRadius: "1rem" }}
            src="https://images.tokopedia.net/img/cache/1190/wmEwCC/2022/10/27/fb2a16bf-d6de-4a12-9172-0a237588012f.jpg"
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
