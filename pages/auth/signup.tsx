import { NextPage } from "next";
import { getProviders } from "next-auth/react";

import Box from "@mui/material/Box";

import { SignupForm } from "forms";
import { centeredPageContainer } from "styles";

export const SignupPage: NextPage = (props) => {
  return (
    <Box sx={centeredPageContainer}>
      <SignupForm />
    </Box>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignupPage;
