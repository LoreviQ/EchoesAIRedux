import React from "react";

export default function LeftSidebar({ collapsed = false }: { collapsed?: boolean }) {
    return (
        <div className={`bg-gray-800 text-white ${collapsed ? "w-[84px]" : "w-[280px]"} h-screen transition-all duration-300`}>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{collapsed ? "LS" : "Left Sidebar"}</h2>
                {!collapsed && (
                    <div className="space-y-2">
                        <p>Navigation item 1</p>
                        <p>Navigation item 2</p>
                        <p>Navigation item 3</p>
                    </div>
                )}
            </div>
        </div>
    );
} 