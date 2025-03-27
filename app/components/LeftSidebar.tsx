import React from "react";
import { navigationItems } from "~/config/navigation";
import { NavButton } from "~/components/buttons";

export default function LeftSidebar({ collapsed = false }: { collapsed?: boolean }) {
    return (
        <div className={`p-4 bg-black text-white ${collapsed ? "w-[84px]" : "w-[280px]"} h-screen transition-all duration-300 border-r border-gray-600`}>
            <h2 className="text-xl font-bold mb-4">{collapsed ? "LS" : "Left Sidebar"}</h2>
            <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                    <div key={item.path} className="w-full">
                        <NavButton
                            item={item}
                            collapsed={collapsed}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
} 