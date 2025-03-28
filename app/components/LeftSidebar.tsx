import { navigationItems } from "~/config/navigation";
import { NavButton } from "~/components/buttons";
import { TypefaceOutlined } from "~/components/branding";

export default function LeftSidebar({ collapsed = false }: { collapsed?: boolean }) {
    return (
        <div className={`bg-black text-white ${collapsed ? "w-[84px]" : "w-[280px]"} h-screen transition-all duration-300 border-r border-gray-600 flex flex-col`}>
            <div className="p-4 space-y-4">
                <TypefaceOutlined text="EchoesAI" path="/" outlineColour="white" />
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

            <div className="mt-auto border-t border-gray-600 h-[84px] flex items-center justify-center">
                <span className="text-sm text-gray-300">Log in</span>
            </div>
        </div>
    );
} 