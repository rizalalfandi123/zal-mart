import { TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import { InputAttributes, NumericFormat } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

interface State {
  textmask: string;
  numberformat: string;
}

export const PriceField = () => {
  const [values, setValues] = useState<State>({
    textmask: "(100) 000-0000",
    numberformat: "1320",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <TextField
      label="react-number-format"
      value={values.numberformat}
      onChange={handleChange}
      name="numberformat"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom as any,
      }}
      variant="standard"
    />
  );
};

const NumberFormatCustom = forwardRef<typeof NumericFormat, CustomProps>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
});
