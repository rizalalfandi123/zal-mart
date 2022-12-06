import type { Breadcrumb } from "components";
import { NextPage } from "next";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ProductsForm } from "forms";
import type { SxProps, Theme } from "@mui/material";
import { Breadcrumbs, PriceField } from "components";

const containerStyle: SxProps<Theme> = () => ({
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
  borderRadius: "1rem",
  padding: "1rem",
  overflowY: "auto",
  overflowX: "hidden",
});

const titleStyle: SxProps<Theme> = {
  marginBottom: "1.5rem",
};

const breadcrumbs: Breadcrumb[] = [
  {
    link: "/admin/dashboard?item=Products",
    title: "Products",
  },
  {
    link: "/products/new",
    title: "Create Product",
  },
];

const NewProduct: NextPage = () => {
  return (
    <Box sx={containerStyle}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Typography variant="h5" sx={titleStyle}>
        Create new Product
      </Typography>
      <PriceField />
      {/* <ProductsForm /> */}
    </Box>
  );
};

export default NewProduct;
