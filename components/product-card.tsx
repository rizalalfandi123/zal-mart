import { CSSProperties, FunctionComponent, useState } from "react";
import Image from "next/image";

import { colors, SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import { BrandCardItemType } from "types";
import { Button } from "components";

type ProductCardType = FunctionComponent<BrandCardItemType>;

const productCardStyle: SxProps<Theme> = ({ palette, breakpoints }) => ({
  height: "22rem",
  width: "12rem",
  border: `1px solid ${colors.grey[300]}`,
  borderRadius: "1rem",
  flexShrink: 0,
  cursor: "pointer",
  ":hover": {
    borderColor: palette.primary.main,
    borderBottomColor: "transparent",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "relative",
  },
  [breakpoints.down("md")]: {
    height: "18rem",
    width: "8rem",
  },
});

const productCardImageContainerStyle: SxProps<Theme> = ({ breakpoints }) => ({
  width: "90%",
  margin: "auto",
  height: "14rem",
  position: "relative",
  borderTopRightRadius: "1rem",
  borderTopLeftRadius: "1rem",
  [breakpoints.down("md")]: {
    height: "10rem",
  },
});

const productCardDescriptionContainerStyle: SxProps<Theme> = ({ breakpoints }) => ({
  height: "8rem",
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

const productCaptionStyle: SxProps<Theme> = {
  fontWeight: 500,
  fontSize: "0.7rem",
};

export const ProductCard: ProductCardType = (props) => {
  const { imageUrl, name } = props;

  const [showAddition, setShowAddition] = useState<boolean>(false);

  const handleShowAddition = () => setShowAddition(true);
  const handleHideAddition = () => setShowAddition(false);

  return (
    <Box sx={productCardStyle} onMouseOver={handleShowAddition} onMouseLeave={handleHideAddition}>
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
      {showAddition && (
        <Box
          sx={({ palette }) => ({
            width: "12rem",
            height: "4rem",
            backgroundColor: "white",
            border: `1px solid ${palette.primary.main}`,
            borderTop: "none",
            position: "absolute",
            zIndex: 2,
            right: -1,
            top: "100%",
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Button fullWidth variant="contained" sx={{ margin: "0 1rem" }}>
            Add to Cart
          </Button>
        </Box>
      )}
    </Box>
  );
};
