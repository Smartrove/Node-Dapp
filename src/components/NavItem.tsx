// components/NavItem.tsx
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";

export interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const NavItem: FC<NavItemProps> = ({ icon: Icon, label, href }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 text-sm font-medium ${
        isActive
          ? "bg-purple-800 text-white border-l-4 border-purple-500"
          : "text-gray-300 hover:bg-gray-800"
      }`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="truncate">{label}</span>
    </Link>
  );
};
