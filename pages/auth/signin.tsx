import { NextPage } from "next";

import Box from "@mui/material/Box";

import { SigninForm } from "forms";
import { centeredPageContainer } from "styles";

export const SigninPage: NextPage = () => {
  return (
    <Box sx={centeredPageContainer}>
      <SigninForm />
    </Box>
  );
};

export default SigninPage;
