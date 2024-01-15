import React, { FunctionComponent, ReactNode } from "react";
import { Button, ButtonPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

interface ButtonProps {
  startIcon?: ReactNode;
  label: string;
  disabled?: boolean;
  type?: "button" | "submit";
  style?: object;
  handleOnClick?: () => void;
  bgColor?: string;
  color?: OverridableStringUnion<
    | "secondary"
    | "inherit"
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >;
}

const CButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const {
    startIcon,
    label,
    handleOnClick,
    bgColor,
    color,
    type,
    disabled = false,
    style = {},
  } = props;
  return (
    <>
      <Button
        startIcon={startIcon}
        color={color ? color : "secondary"}
        variant="contained"
        size="small"
        fullWidth
        type={type}
        sx={{
          fontSize: "1rem",
          textTransform: "none",
          my: "10px",
          backgroundColor: bgColor,
          ...style,
        }}
        onClick={handleOnClick}
        disabled={disabled}
      >
        {label}
      </Button>
    </>
  );
};

export default CButton;
