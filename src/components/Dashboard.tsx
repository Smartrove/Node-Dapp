// components/Dashboard.tsx
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { LayoutDashboard, Gift, Coins, Wallet, History } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { WalletAddress } from "./WalletAddress";

export const Dashboard: FC = () => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Gift, label: "Referral Program", href: "/referral" },
    { icon: Coins, label: "Rewards", href: "/rewards" },
    { icon: Wallet, label: "Earnings", href: "/earnings" },
    { icon: History, label: "Transaction History", href: "/transaction" },
  ];

  return (
    <div className="flex h-screen w-full">
      <Sidebar items={navItems} />

      {/* Main Content */}
      <div className="ml-64 flex-1 overflow-y-auto">
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-purple-600" />
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              </div>
              <WalletAddress />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
