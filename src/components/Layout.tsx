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
      <SidebarInset className="bg-background px-4 md:px-8 lg:px-8 max-w-6xl mx-auto">
        <div className="flex justify-end p-1 border-b border-border/20">
          <ThemeToggle />
        </div>
        <div className="flex flex-col min-h-[calc(100vh-2rem)]">
          <main className="flex-1 px-8 md:px-12 lg:px-16 py-2">
            <Outlet />
          </main>
          <Footer />
        </div>
      </SidebarInset>
    </>
  );
};

export default Layout;
