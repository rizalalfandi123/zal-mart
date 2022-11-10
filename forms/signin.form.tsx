import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

import { BrandIcon, Link, Button, Checkbox, TextField } from "components";
import { signinSchema, SigninType } from "schemas";
import { AuthFormContainer } from "./styled";

export const SigninForm: FunctionComponent = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: SigninType) => {
    console.log({ data });
    // try {
    // } catch (error) {
    //   console.log({ error });
    //   enqueueSnackbar("Failed to signin", { variant: "error" });
    // }
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
          <Typography variant="h5" fontWeight={600}>
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
          <Button fullWidth size="large" variant="contained" type="submit">
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
