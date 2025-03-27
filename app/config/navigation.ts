import { type IconComponent, HomeIcon, UserIcon, DocumentIcon, SettingsIcon } from "~/assets/icons";


export interface NavItem {
    label: string;
    path: string;
    icon: IconComponent;
}

export const navigationItems: NavItem[] = [
    {
        label: "Home",
        path: "/",
        icon: HomeIcon,
    },
    {
        label: "User",
        path: "/user",
        icon: UserIcon,
    },
    {
        label: "Notifications",
        path: "/notifications",
        icon: DocumentIcon,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: SettingsIcon,
    },
];