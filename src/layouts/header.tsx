import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100vw",
          zIndex: 9995,
          py: 2,
          px: 2,
          gap: 1,
          boxShadow: "sm",
          backgroundColor: "#64b5f6",
        }}
      >
        Header
      </Box>
    </>
  );
};

export default Header;
