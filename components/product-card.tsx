import { CSSProperties, FunctionComponent } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import { colors, SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import { BrandCardItemType } from "types";

type ProductCardType = FunctionComponent<BrandCardItemType>;

const productCardStyle: SxProps<Theme> = ({ palette, breakpoints }) => ({
  height: "20rem",
  width: "10rem",
  border: `1px solid ${colors.grey[300]}`,
  borderRadius: "1rem",
  flexShrink: 0,
  cursor: "pointer",
  ":hover": {
    borderColor: palette.primary.main,
  },
  [breakpoints.down("md")]: {
    height: "18rem",
    width: "8rem",
  },
});

const productCardImageContainerStyle: SxProps<Theme> = ({ breakpoints }) => ({
  width: "90%",
  margin: "auto",
  height: "13rem",
  position: "relative",
  borderTopRightRadius: "1rem",
  borderTopLeftRadius: "1rem",
  [breakpoints.down("md")]: {
    height: "10rem",
  },
});

const productCardDescriptionContainerStyle: SxProps<Theme> = ({ breakpoints }) => ({
  height: "7rem",
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  gap: "4px",
  [breakpoints.down("md")]: {
    height: "8rem",
  },
});

const productCardImageStyle: CSSProperties = { objectFit: "contain" };

const productPriceStyle: SxProps<Theme> = ({ palette }) => ({
  color: palette.primary.main,
  fontWeight: 600,
});

const productTitleStyle: SxProps<Theme> = {
  fontWeight: 600,
};

const productCaptionStyle: SxProps<Theme> = {
  fontWeight: 500,
  fontSize: "0.7rem",
};

export const ProductCard: ProductCardType = (props) => {
  const { imageUrl, name } = props;

  return (
    <Box sx={productCardStyle}>
      <Box sx={productCardImageContainerStyle}>
        <Image alt={name} fill src={imageUrl} style={productCardImageStyle} />
      </Box>
      <Box sx={productCardDescriptionContainerStyle}>
        <Typography>{name}</Typography>
        <Typography sx={productPriceStyle}>Rp. 5.000.000,00</Typography>
        <Box sx={{ display: "flex", gap: 0.75, color: colors.grey[600], alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "inherit" }}>
            <StarRoundedIcon fontSize="small" sx={{ color: "#facc15" }} />
            <Typography sx={productCaptionStyle}>4.5</Typography>
          </Box>
          <Typography sx={productCaptionStyle}>|</Typography>
          <Typography sx={productCaptionStyle}>54 Sold</Typography>
        </Box>
      </Box>
    </Box>
  );
};
