import { CSSProperties, FunctionComponent } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { colors, SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { BrandCardItemType } from "types";

type BrandCardType = FunctionComponent<BrandCardItemType>;

const brandCardStyle: SxProps<Theme> = ({ palette, breakpoints }) => ({
  height: "14rem",
  width: "10rem",
  border: `1px solid ${colors.grey[300]}`,
  borderRadius: "1rem",
  flexShrink: 0,
  cursor: "pointer",
  ":hover": {
    borderColor: palette.primary.main,
  },
  [breakpoints.down("md")]: {
    height: "12rem",
    width: "8rem",
  },
});

const brandCardImageContainerStyle: SxProps<Theme> = ({ breakpoints }) => ({
  width: "100%",
  height: "11rem",
  position: "relative",
  borderTopRightRadius: "1rem",
  borderTopLeftRadius: "1rem",
  [breakpoints.down("md")]: {
    height: "9rem",
  },
});

const brandCardTitleContainerStyle: SxProps<Theme> = ({ breakpoints }) => ({
  height: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [breakpoints.down("md")]: {
    height: "2rem",
  },
});

const brandCardImageStyle: CSSProperties = { objectFit: "cover" };

export const BrandCard: BrandCardType = (props) => {
  const { imageUrl, name } = props;

  return (
    <Box sx={brandCardStyle}>
      <Box sx={brandCardImageContainerStyle}>
        <Image alt={name} fill src={imageUrl} style={brandCardImageStyle} />
      </Box>
      <Box sx={brandCardTitleContainerStyle}>
        <Typography>{name}</Typography>
      </Box>
    </Box>
  );
};
