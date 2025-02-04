import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { WalletContextProvider } from "./components/WalletContextProvider";
import { WalletConnection } from "./components/WalletConnection";
import { Dashboard } from "./components/Dashboard";
import { Wifi, WifiOff } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import EmailLogin from "./components/EmailLogin";
import { DashboardHome } from "./components/DashboardHome";
import { ReferralProgram } from "./components/Referral";
import { Rewards } from "./components/Rewards";
import { Earnings } from "./components/Earnings";
import { TransactionHistory } from "./components/TransactionHistory";

function AppContent() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const { publicKey } = useWallet();

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center gap-2 mb-4">
          <WifiOff className="w-5 h-5 text-red-500" />
          <span className="text-red-500">No Internet Connection</span>
        </div>
        <div className="text-center text-red-500 p-4 bg-red-50 rounded-lg">
          Please check your internet connection to use the wallet features.
        </div>
      </div>
    );
  }

  if (!publicKey) {
    return (
      <div className="p-8 w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">
          Solana Web3 dApp
        </h1>
        <WalletConnection />
        <br />
        <hr className="text-purple-800" />
        <EmailLogin />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="referral" element={<ReferralProgram />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="transaction" element={<TransactionHistory />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <WalletContextProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col items-center justify-center p-4">
          <AppContent />
        </div>
      </BrowserRouter>
    </WalletContextProvider>
  );
}

export default App;
