import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import { adminSidebarItems } from "./routes/adminSidebarItems";
import { generateRoutes } from "./utils/generatedRoutes";

export default function App() {
  console.log(generateRoutes(adminSidebarItems));
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}
