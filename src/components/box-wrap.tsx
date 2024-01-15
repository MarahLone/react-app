import React, { FunctionComponent, ReactNode } from "react";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/system";

interface BoxWrapProps extends BoxProps {
  children: ReactNode;
  marginTop?: string;
  hasBackground?: boolean;
}

const BoxWrap: FunctionComponent<BoxWrapProps> = ({
  children,
  marginTop,
  hasBackground = true,
  ...props
}) => {
  return (
    <>
      <Box borderRadius="8px" marginTop={marginTop} {...props}>
        {children}
      </Box>
    </>
  );
};

export default BoxWrap;
