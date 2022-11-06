import { FunctionComponent, useState } from "react";
import { SxProps, TextField, Typography, Unstable_Grid2 as Grid, Theme } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { useSnackbar } from "notistack";

import { BrandIcon, Link, PasswordField, Checkbox, Button } from "components";
import { signupSchema } from "schemas";
import { useRegisterMutation } from "state-management";
import { AuthFormContainer } from "./styled";

type SignupType = z.infer<typeof signupSchema>;

const buttonSigninStyle: SxProps<Theme> = {
  padding: 0,
  letterSpacing: 1,
  fontSize: "1rem",
  fontWeight: 400
};

export const SignupForm: FunctionComponent = () => {
  const [disabledRegister, setDisabledRegister] = useState<boolean>(true);
  const [registerUser, { isLoading: loadingSignup }] = useRegisterMutation();
  const { enqueueSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
  });

  const handleChangeAgreement = () => setDisabledRegister(!disabledRegister);
  const onSubmit = async (data: SignupType) => {
    try {
      const { message } = await registerUser(data).unwrap();
      enqueueSnackbar(message, { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Filed to signup", { variant: "error" });
    }
  };

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        <Grid alignSelf="center">
          <BrandIcon fontSize="8rem" />
        </Grid>
        <Grid>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Sign up
          </Typography>
        </Grid>
        <Grid>
          <Typography>
            Already have an account?{" "}
            <Button sx={buttonSigninStyle} onClick={() => signIn()}>
              Signin now
            </Button>
          </Typography>
        </Grid>
        <Grid>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={errors.hasOwnProperty("name")}
                helperText={errors.name?.message}
                fullWidth
                label="Enter Your Name"
              />
            )}
          />
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
          <Typography variant="caption">
            By registering, you agree to the processing of your personal data by Zal Mart as described in the{" "}
            <Link href="/">Privacy Policy</Link>.
          </Typography>
        </Grid>
        <Grid>
          <Checkbox
            onChange={handleChangeAgreement}
            label={
              <Typography>
                I've read and agree to the <Link href="/">Terms of Service</Link>
              </Typography>
            }
          />
        </Grid>
        <Grid>
          <Button
            fullWidth
            size="large"
            variant="contained"
            type="submit"
            disabled={disabledRegister}
            loading={loadingSignup}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </AuthFormContainer>
  );
};

export default SignupForm;
