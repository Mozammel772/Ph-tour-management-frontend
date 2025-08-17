import AddTour from "@/pages/Admin/AddTour";
// import AdminDashboard from "@/pages/Admin/AdminDashboard";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AdminDashboard = lazy(() => import("@/pages/Admin/AdminDashboard"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        component: AdminDashboard,
      },
    ],
  },
  {
    title: "Tour-Management",
    items: [
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
    ],
  },
];
