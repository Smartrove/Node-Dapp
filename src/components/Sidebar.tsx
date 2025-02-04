// components/Sidebar.tsx
import { FC } from "react";
import { NavItem, NavItemProps } from "./NavItem";
import { Menu } from "lucide-react";

interface SidebarProps {
  items: NavItemProps[];
}

export const Sidebar: FC<SidebarProps> = ({ items }) => (
  <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col border-r border-gray-800">
    <div className="p-6 pb-4">
      <div className="flex items-center gap-3">
        <Menu className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Menu</h2>
      </div>
    </div>
    <nav className="flex-1 overflow-y-auto px-4 pb-6">
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </nav>
  </aside>
);
