import { NextPage } from "next";

import Box from "@mui/material/Box";

import { SignupForm } from "forms";
import { centeredPageContainer } from "styles";

export const SignupPage: NextPage = () => {
  return (
    <Box sx={centeredPageContainer}>
      <SignupForm />
    </Box>
  );
};

export default SignupPage;
