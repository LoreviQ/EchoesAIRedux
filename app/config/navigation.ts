import { type IconComponent, HomeIcon, UserIcon, DocumentIcon, SettingsIcon } from "~/assets/icons";


export interface NavItem {
    label: string;
    path: string;
    icon: IconComponent;
    shortLabel?: string; // For collapsed state
}

export const navigationItems: NavItem[] = [
    {
        label: "Home",
        shortLabel: "DB",
        path: "/",
        icon: HomeIcon,
    },
    {
        label: "User",
        shortLabel: "US",
        path: "/user",
        icon: UserIcon,
    },
    {
        label: "Notifications",
        shortLabel: "NT",
        path: "/notifications",
        icon: DocumentIcon,
    },
    {
        label: "Settings",
        shortLabel: "ST",
        path: "/settings",
        icon: SettingsIcon,
    },
];