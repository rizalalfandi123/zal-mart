import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

import { BrandIcon, Link, Button, Checkbox, TextField } from "components";
import { signupSchema, SignupType } from "schemas";
import { AuthFormContainer } from "./styled";

export const SignupForm: FunctionComponent = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: SignupType) => {
    console.log({ data });
    // try {
    // } catch (error) {
    //   console.log({ error });
    //   enqueueSnackbar("Failed to signup", { variant: "error" });
    // }
  };

  const { handleSubmit, control } = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        <Grid alignSelf="center">
          <BrandIcon fontSize="8rem" />
        </Grid>
        <Grid>
          <Typography variant="h5" fontWeight={600}>
            Explore your favourite smartphone 🚀
          </Typography>
        </Grid>
        <Grid>
          <Typography gutterBottom>Create your account to join Zal Mart</Typography>
        </Grid>
        <Grid>
          <TextField<SignupType> control={control} name="name" fullWidth />
        </Grid>
        <Grid>
          <TextField<SignupType> control={control} name="email" fullWidth />
        </Grid>
        <Grid>
          <TextField<SignupType> control={control} name="password" type="password" fullWidth />
        </Grid>
        <Grid>
          <Grid>
            <Checkbox
              label={
                <Typography>
                  I agree to privacy <Link href="/auth/signup">policy & terms</Link>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Grid>
          <Button fullWidth size="large" variant="contained" type="submit">
            Register
          </Button>
        </Grid>
        <Grid>
          <Typography textAlign="center">
            Already an account? <Link href="/auth/signin">Signin now</Link>
          </Typography>
        </Grid>
      </Grid>
    </AuthFormContainer>
  );
};

export default SignupForm;
