import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import jwt from "jsonwebtoken";

import { BrandIcon, Link, Button, Checkbox, TextField } from "components";
import { signupSchema, SignupType } from "schemas";
import {
  useRegisterMutation,
  setSnackbarErrorApi,
  setSuccessSnackbar,
  useAppDispatch,
  addUser,
} from "state-management";
import { AuthFormContainer } from "./styled";
import { User } from "@prisma/client";
import type { SxProps, Theme } from "@mui/material";

const buttonStyle: SxProps<Theme> = {
  padding: "1rem 2rem",
};

export const SignupForm: FunctionComponent = () => {
  const [disabledButtonRegister, setDisabledButtonRegister] = useState<boolean>(true);
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SignupType) => {
    try {
      const response = await register(data).unwrap();

      const user = jwt.decode(response.data.token) as User;
      dispatch(addUser(user));
      dispatch(setSuccessSnackbar(response.message));

      router.push("/");
    } catch (error) {
      dispatch(setSnackbarErrorApi(error));
    }
  };

  const { handleSubmit, control } = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
  });

  const handleChangeCheckboxPolicy = () => setDisabledButtonRegister(!disabledButtonRegister);

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        <Grid alignSelf="center">
          <BrandIcon fontSize="8rem" />
        </Grid>
        <Grid>
          <Typography variant="h6" fontWeight={600}>
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
              onChange={handleChangeCheckboxPolicy}
              label={
                <Typography>
                  I agree to privacy <Link href="/auth/signup">policy & terms</Link>
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Grid>
          <Button
            fullWidth
            disabled={disabledButtonRegister}
            loading={isLoading}
            size="large"
            variant="contained"
            type="submit"
            sx={buttonStyle}
          >
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
