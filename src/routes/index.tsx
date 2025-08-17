import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/Authentication/Login";
import Register from "@/pages/Authentication/Register";
import Verify from "@/pages/Authentication/Verify";
import About from "@/pages/homePages/About";
import Home from "@/pages/homePages/Home";
import ManageTour from "@/pages/User/ManageTour";
import UserDashboard from "@/pages/User/UserDashboard";
import { generateRoutes } from "@/utils/generatedRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",
      },
      {
        Component: About,
        path: "/about",
      },
    ],
  },

  {
    Component: DashboardLayout,
    path: "admin",
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    Component: DashboardLayout,
    path: "user",
    children: [
      {
        Component: UserDashboard,
        path: "dashboard",
      },
      {
        Component: ManageTour,
        path: "manage-tour",
      },
    ],
  },

  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);
