import { FunctionComponent, ReactNode } from "react";
import { Checkbox as MuiCheckbox, CheckboxProps, FormControlLabel, FormGroup } from "@mui/material";

type CheckboxType = FunctionComponent<CheckboxProps & { label?: ReactNode }>;

export const Checkbox: CheckboxType = (props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<MuiCheckbox {...props} />} label={props.label} />
    </FormGroup>
  );
};
