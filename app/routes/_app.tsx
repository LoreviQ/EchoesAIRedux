import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useEffect, useState } from "react";
import LeftSidebar from "~/components/LeftSidebar";
import RightSidebar from "~/components/RightSidebar";

export const meta: MetaFunction = () => {
  return [
    { title: "My App" },
    { name: "description", content: "My Remix App with responsive layout" },
  ];
};

export default function AppLayout() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine visibility and collapse state based on window width
  const showLeftSidebar = windowWidth >= 768;
  const showRightSidebar = windowWidth >= 1024;
  const leftSidebarCollapsed = windowWidth < 1280 && windowWidth >= 768;
  const rightSidebarCollapsed = windowWidth < 1280 && windowWidth >= 1024;


  return (
    <div className="flex justify-center bg-black text-white min-h-screen">
      {showLeftSidebar && <LeftSidebar collapsed={leftSidebarCollapsed} />}
      <main className="max-w-[600px] w-full h-screen overflow-y-auto">
        <Outlet />
      </main>
      {showRightSidebar && <RightSidebar collapsed={rightSidebarCollapsed} />}
    </div>
  );
}