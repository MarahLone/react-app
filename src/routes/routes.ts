import DashboardPage from "../pages/dashboard.page";
import Layout from "../layouts/layout";
import LoginPage from "../pages/auth/login.page";
import SettingsPage from "../pages/settings/settings.page";
import UsersPage from "../pages/users/users.page";
import { RouterModel } from "../models/router.model";

export const PUBLIC_ROUTES: RouterModel[] = [
  {
    path: "/login",
    title: "Login",
    element: LoginPage,
  },
  {
    path: "",
    element: Layout,
    children: [
      {
        path: "",
        title: "Dashboard",
        element: DashboardPage,
      },
      {
        path: "/users",
        title: "Users",
        element: UsersPage,
      },
      {
        path: "/settings",
        title: "Settings",
        element: SettingsPage,
      },
    ],
  },
];
