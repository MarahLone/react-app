import AcUnitIcon from "@mui/icons-material/AcUnit";
import LogoutIcon from "@mui/icons-material/Logout";
import { FunctionComponent } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { items } from "./sidebar-item";
interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "250px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            m: "1em",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <AcUnitIcon />
          </Avatar>
          <Typography
            component="h5"
            variant="subtitle1"
            sx={{
              mx: "1em",
              fontWeight: "bold",
            }}
          >
            Project Name
          </Typography>
        </Box>
        <Divider />

        <Box
          key={"sidebar-items"}
          sx={{
            minHeight: 0,
            overflow: "hidden auto",
            flexGrow: 1,
          }}
        >
          <List dense>
            {items.map(
              ({ label, name, path, items: subItems, icon: Icon, ...rest }) => (
                <ListItemButton
                  style={{ padding: 10, paddingLeft: 30 }}
                  key={name}
                  component={Link}
                  to={path}
                  {...rest}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              )
            )}
          </List>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            m: 1,
          }}
        >
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
          <Typography
            component="p"
            variant="subtitle1"
            sx={{
              mx: "1em",
              fontWeight: "bold",
            }}
          >
            Log out
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
