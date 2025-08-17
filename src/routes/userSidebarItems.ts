import Booking from "@/pages/User/Booking";
import UserDashboard from "@/pages/User/UserDashboard";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        component: UserDashboard,
      },
    ],
  },
  {
    title: "Tour Booking",
    items: [
      {
        title: "Booking",
        url: "/user/booking",
        component: Booking,
      },
    ],
  },
];
