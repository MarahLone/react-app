import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";

interface SidebarItemsModel {
  name: string;
  path: string;
  label: string;
  icon?: any;
  items?: SidebarItemsModel[];
}

export const items: SidebarItemsModel[] = [
  { name: "home", label: "Dashboard", icon: HomeIcon, path: "/" },
  {
    name: "users",
    path: "/users",
    icon: GroupIcon,
    label: "Users",
  },
  {
    name: "settings",
    path: "/settings",
    label: "Settings",
    icon: SettingsIcon,
    // items: [
    //   {
    //     name: "profile",
    //     path: "/profile",
    //     label: "Profile",
    //   },
    // ],
  },
];
