import { FC } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "lucide-react";

export const WalletConnection: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <Wallet className="w-6 h-6 text-purple-600" />
        <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700" />
        <p className="text-center">Login with your wallet</p>
      </div>

      {publicKey && (
        <div className="text-sm text-gray-600">
          <p>Connection Status: {connection ? "Connected" : "Disconnected"}</p>
          <p>Your wallet: {publicKey.toString()}</p>
        </div>
      )}
    </div>
  );
};
