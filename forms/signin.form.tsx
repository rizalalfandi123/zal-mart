import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { TextField, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";

import { BrandIcon, Link, PasswordField, Button } from "components";
import { signinSchema } from "schemas";
import { AuthFormContainer } from "./styled";

type SigninType = z.infer<typeof signinSchema>;

export const SigninForm: FunctionComponent = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [loadingSignin, setLoadingSignin] = useState<boolean>(false);

  const handleButtonGoogleSignin = () => signIn("google", { callbackUrl: "/" });

  const onSubmit = async (data: SigninType) => {
    try {
      setLoadingSignin(true);
      const response = await signIn("credentials", { ...data, redirect: false });
      setLoadingSignin(false);

      if (!response || !response.ok) return enqueueSnackbar("Invalid email or password", { variant: "error" });

      router.push("/");
    } catch (error) {
      console.log({ error });
      enqueueSnackbar("Failed to signin", { variant: "error" });
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SigninType>({
    resolver: zodResolver(signinSchema),
  });

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        <Grid alignSelf="center">
          <BrandIcon fontSize="8rem" />
        </Grid>
        <Grid>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Sign in
          </Typography>
        </Grid>
        <Grid>
          <Typography>
            New to Zal Mart? <Link href="/auth/signup">Sign up now</Link>
          </Typography>
        </Grid>
        <Grid>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty("email")}
                helperText={errors.email?.message}
                fullWidth
                label="Enter Your Email"
              />
            )}
          />
        </Grid>
        <Grid>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordField
                {...field}
                error={errors.hasOwnProperty("password")}
                helperText={errors.password?.message}
                fullWidth
                label="Enter Your Password"
              />
            )}
          />
        </Grid>
        <Grid>
          <Button fullWidth loading={loadingSignin} size="large" variant="contained" type="submit">
            Login
          </Button>
        </Grid>
        <Grid>
          <Link href="/">Forgot Password</Link>
        </Grid>
        <Grid alignSelf="center">
          <Typography>Or With</Typography>
        </Grid>
        <Grid>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleButtonGoogleSignin}
          >
            Google
          </Button>
        </Grid>
      </Grid>
    </AuthFormContainer>
  );
};

export default SigninForm;
