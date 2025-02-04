// components/Dashboard.tsx
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Gift,
  Coins,
  Wallet,
  History,
  Menu,
} from "lucide-react";
import { Sidebar } from "./Sidebar";
import { WalletAddress } from "./WalletAddress";

export const Dashboard: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Gift, label: "Referral Program", href: "/referral" },
    { icon: Coins, label: "Rewards", href: "/rewards" },
    { icon: Wallet, label: "Earnings", href: "/earnings" },
    { icon: History, label: "Transaction History", href: "/transaction" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <Sidebar items={navItems} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Menu Button for Mobile */}
                <button
                  onClick={toggleSidebar}
                  className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <Menu className="w-6 h-6" />
                </button>

                {/* Dashboard Title */}
                <LayoutDashboard className="w-8 h-8 text-purple-600 hidden md:block" />
                <h1 className="text-2xl font-bold text-gray-800 hidden md:block">
                  Dashboard
                </h1>
              </div>

              {/* Wallet Address */}
              <WalletAddress />
            </div>
          </div>

          {/* Page Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};
