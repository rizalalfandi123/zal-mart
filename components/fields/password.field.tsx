import { useState, forwardRef } from "react";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordField = forwardRef((props: TextFieldProps, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      {...props}
      inputProps={{
        ...props.inputProps,
        ref,
      }}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
    />
  );
});
