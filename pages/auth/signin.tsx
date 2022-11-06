import { NextPage } from "next";
import { getProviders } from "next-auth/react";

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

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SigninPage;
