import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import LeftSidebar from "~/components/LeftSidebar";
import RightSidebar from "~/components/RightSidebar";
import { getSupabaseClient } from "~/utils/supabase";
import type { SessionStatus } from "~/types/models";

export const meta: MetaFunction = () => {
  return [
    { title: "My App" },
    { name: "description", content: "My Remix App with responsive layout" },
  ];
};

export async function loader() {
  console.log("_app.tsx loader");
  const { supabase } = getSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  const sessionStatus: SessionStatus = {
    active: !!session,
    user: session?.user,
  }
  return { sessionStatus };
}

export default function App() {
  const { sessionStatus } = useLoaderData<typeof loader>();

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
      {showLeftSidebar && <LeftSidebar collapsed={leftSidebarCollapsed} sessionStatus={sessionStatus} />}
      <main className="max-w-[600px] w-full h-screen overflow-y-auto">
        <Outlet context={{ sessionStatus }} />
      </main>
      {showRightSidebar && <RightSidebar collapsed={rightSidebarCollapsed} />}
    </div>
  );
}