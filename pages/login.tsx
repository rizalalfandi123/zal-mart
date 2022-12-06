import type { FunctionComponent, ComponentProps } from "react";
import type { SxProps, Theme } from "@mui/material";
import type { User } from "@prisma/client";

import { NextPage } from "next";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import jwt from "jsonwebtoken";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { BrandIcon, Link, Button, Checkbox, TextField, Form } from "components";
import { signinSchema, SigninType } from "schemas";
import { useSigninMutation, useAppDispatch, setSnackbarErrorApi, setSuccessSnackbar, addUser } from "state-management";

import Box from "@mui/material/Box";

const buttonStyle: SxProps<Theme> = {
  padding: "1rem 2rem",
};

export const SigninPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useSigninMutation();

  const onSubmit = async (data: SigninType) => {
    try {
      const response = await login(data).unwrap();
      // TODO: set token to localStorage
      localStorage.setItem("token", response.data.token);

      const user = jwt.decode(response.data.token) as User;

      dispatch(addUser(user));
      dispatch(setSuccessSnackbar(response.message));
      router.push("/");
    } catch (error) {
      dispatch(setSnackbarErrorApi(error));
    }
  };

  const boxAuthStyle: SxProps<Theme> = ({ breakpoints, shape }) => ({
    width: "100%",
    [breakpoints.up("md")]: {
      maxWidth: "480px",
      boxShadow: "rgb(50 71 92 / 10%) 0px 2px 10px 0px",
      padding: "2rem",
      borderRadius: shape.borderRadius + "px",
      backgroundColor: "white",
    },
  });

  return (
    <Box className="auth-container">
      <Box sx={boxAuthStyle}>
        <Form<SigninType> onSubmit={onSubmit} resolver={zodResolver(signinSchema)}>
          <Grid container direction="column" spacing={3}>
            <Grid alignSelf="center">
              <BrandIcon fontSize="8rem" />
            </Grid>
            <Grid>
              <Typography variant="h6" fontWeight={600}>
                Welcome Zal Mart! 👋🏻
              </Typography>
              <Typography>Please signin to your account</Typography>
            </Grid>
            <Grid>
              <TextField<SigninType> name="email" fullWidth />
            </Grid>
            <Grid>
              <TextField<SigninType> name="password" type="password" fullWidth />
            </Grid>
            <Grid>
              <Button fullWidth loading={isLoading} size="large" variant="contained" type="submit" sx={buttonStyle}>
                Login
              </Button>
            </Grid>
            <Grid>
              <Typography textAlign="center">
                New to Zal Mart? <Link href="/auth/signup">Sign up now</Link>
              </Typography>
            </Grid>
          </Grid>
        </Form>
      </Box>
    </Box>
  );
};

export default SigninPage;
