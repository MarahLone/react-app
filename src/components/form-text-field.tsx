/**
 * FormTextField component.
 *
 * Accepts props for configuring a Material UI <TextField> component.
 * Handles wiring up with Formik for validation and error handling.
 * Renders a <TextField> wrapped in a <FormControl>.
 */
import React, { FunctionComponent } from "react";
import { useField } from "formik";
import { FormControl, SelectChangeEvent, TextField } from "@mui/material";

interface FormTextFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  value?: unknown;
  key?: any;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<any>
  ) => void;
}

const FormTextField: FunctionComponent<FormTextFieldProps> = ({
  name,
  type = "text",
  value,
  required = false,
  disabled = false,
  onChange,
  key,
  ...props
}) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...props,
    type: type,
    value: value,
    required: required,
    disabled: disabled,
    onChange: onChange,
    error: !!meta.touched && !!meta.error,
    helperText: meta.touched && meta.error ? meta.error : undefined,
  };

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <TextField
          key={key}
          variant="outlined"
          fullWidth
          {...configTextField}
          sx={{
            "& .MuiFormHelperText-root.Mui-error": {
              marginLeft: 0,
            },
          }}
        />
      </FormControl>
    </>
  );
};

export default FormTextField;
