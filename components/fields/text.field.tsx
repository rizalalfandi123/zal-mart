import { useState } from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";

import MuiTextField, { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type TextFieldProps<T extends FieldValues> = Omit<MuiTextFieldProps, "name"> & {
  control?: Control<T>;
  name: Path<T>;
};

const TextField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  const { control, name, ...textFieldProps } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const passwordEndAdornment = (
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const error = errors.hasOwnProperty(props.name);
        const helperText = (errors[props.name]?.message as string) || "";
        const inputProps = { ...field, ...textFieldProps.inputProps };
        const label = textFieldProps.label ? textFieldProps.label : `Enter your ${name}`;

        if (textFieldProps.type === "password") {
          return (
            <MuiTextField
              {...textFieldProps}
              inputProps={inputProps}
              error={error}
              helperText={helperText}
              label={label}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: passwordEndAdornment,
                ...props.InputProps,
              }}
            />
          );
        }

        return (
          <MuiTextField
            {...textFieldProps}
            inputProps={inputProps}
            error={error}
            helperText={helperText}
            label={label}
          />
        );
      }}
    />
  );
};

export { TextField };
