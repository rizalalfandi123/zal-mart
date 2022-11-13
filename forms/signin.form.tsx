import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { BrandIcon, Link, Button, Checkbox, TextField } from "components";
import { signinSchema, SigninType } from "schemas";
import { AuthFormContainer } from "./styled";
import { useSigninMutation, useAppDispatch, setSnackbarErrorApi, setSuccessSnackbar, addUser } from "state-management";

export const SigninForm: FunctionComponent = () => {
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

  const { handleSubmit, control } = useForm<SigninType>({
    resolver: zodResolver(signinSchema),
  });

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        <Grid alignSelf="center">
          <BrandIcon fontSize="8rem" />
        </Grid>
        <Grid>
          <Typography variant="h6" fontWeight={600}>
            Welcome Zal Mart! 👋🏻
          </Typography>
        </Grid>
        <Grid>
          <Typography gutterBottom>Please signin to your account</Typography>
        </Grid>
        <Grid>
          <TextField<SigninType> control={control} name="email" fullWidth />
        </Grid>
        <Grid>
          <TextField<SigninType> control={control} name="password" type="password" fullWidth />
        </Grid>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid>
            <Checkbox label={<Typography>Remember me</Typography>} />
          </Grid>
          <Grid>
            <Link href="/">Forgot Password</Link>
          </Grid>
        </Grid>
        <Grid>
          <Button fullWidth loading={isLoading} size="large" variant="contained" type="submit">
            Login
          </Button>
        </Grid>
        <Grid>
          <Typography textAlign="center">
            New to Zal Mart? <Link href="/auth/signup">Sign up now</Link>
          </Typography>
        </Grid>
      </Grid>
    </AuthFormContainer>
  );
};

export default SigninForm;
