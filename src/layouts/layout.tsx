import Sidebar from "./sidebar";
import { Box, Divider } from "@mui/material";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
// import Header from "./header";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <>
      <Sidebar />
      <Divider orientation="vertical" />
      <Box
        component="main"
        sx={{
          overflowY: "hidden",
          height: "100%",
          width: "100%",
          flex: 1,
        }}
      >
        {/* <Header /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "80px",
            mx: "1em",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
