import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Wallet } from "lucide-react";

export const WalletAddress: FC = () => {
  const { publicKey } = useWallet();

  return (
    <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg">
      <Wallet className="w-5 h-5 text-purple-600" />
      <span className="text-sm font-medium text-purple-600">
        {publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}
      </span>
    </div>
  );
};
