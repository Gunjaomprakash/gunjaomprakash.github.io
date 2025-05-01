
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarInset, SidebarRail } from "./ui/sidebar";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <AppSidebar />
      <SidebarRail />
      <SidebarInset className="bg-background">
        <div className="flex justify-end p-2">
          <ThemeToggle />
        </div>
        <div className="flex flex-col min-h-[calc(100vh-3rem)]">
          <main className="flex-1 max-w-6xl w-full mx-auto px-4">
            <Outlet />
          </main>
          <Footer />
        </div>
      </SidebarInset>
    </>
  );
};

export default Layout;
