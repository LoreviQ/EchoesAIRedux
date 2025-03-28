import React from "react";
import { Link, useLocation } from "@remix-run/react";
import type { NavItem } from "~/config/navigation";

interface NavButtonProps {
    item: NavItem;
    collapsed: boolean;
}

export function NavButton({ item, collapsed }: NavButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === item.path;

    return (
        <Link
            to={item.path}
            className={`
        inline-flex items-center p-2 rounded-xl transition-colors
        bg-black text-white
        hover:bg-gray-600
        ${isActive ? "font-bold" : "font-normal"}
      `}
        >
            <div className="w-8 h-8 flex items-center justify-center">
                <item.icon />
            </div>
            {!collapsed && (
                <span className="ml-3">
                    {item.label}
                </span>
            )}
        </Link>
    );
} 