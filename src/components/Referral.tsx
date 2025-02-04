import { FC } from "react";
import {
  Gift,
  Trophy,
  Zap,
  Users,
  Share2,
  Clipboard,
  BarChart,
  ArrowUpRight,
} from "lucide-react";
import { Progress } from "../ui/Progress";

export const ReferralProgram: FC = () => {
  const referralCode = "SOLANA2024";
  const totalEarnings = 124.5;
  const totalReferrals = 18;
  const activeCampaigns = 3;
  const campaignProgress = 65;

  const campaigns = [
    {
      name: "Summer Boost",
      period: "June 1 - August 31",
      reward: "Double earnings for first 5 referrals",
      progress: 80,
      target: "50 SOL",
    },
    {
      name: "Mega Referral",
      period: "Limited Time",
      reward: "NFT Bonus for 10+ successful referrals",
      progress: 45,
      target: "10 Referrals",
    },
    {
      name: "Loyalty Program",
      period: "Ongoing",
      reward: "1% lifetime earnings from tier 2 referrals",
      progress: 100,
      target: "Unlimited",
    },
  ];

  const leaderboard = [
    { name: "CryptoKing123", referrals: 142, earnings: "542 SOL" },
    { name: "SolanaPro", referrals: 118, earnings: "489 SOL" },
    { name: "Web3Wizard", referrals: 95, earnings: "387 SOL" },
    {
      name: "YourUsername",
      referrals: totalReferrals,
      earnings: `${totalEarnings} SOL`,
      highlight: true,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Program Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <Gift className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="text-sm text-gray-500">Total Earnings</h3>
              <p className="text-2xl font-bold">{totalEarnings} SOL</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-sm text-gray-500">Successful Referrals</h3>
              <p className="text-2xl font-bold">{totalReferrals}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <Zap className="w-8 h-8 text-orange-600" />
            <div>
              <h3 className="text-sm text-gray-500">Active Campaigns</h3>
              <p className="text-2xl font-bold">{activeCampaigns}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Link Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Share2 className="w-5 h-5" /> Your Referral Toolkit
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="font-mono">solana.dapp/{referralCode}</span>
              <button className="text-blue-600 hover:underline flex items-center gap-1">
                <Clipboard className="w-4 h-4" /> Copy Link
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-twitter-blue text-white rounded-lg">
                Twitter
              </button>
              <button className="px-3 py-1.5 bg-telegram-blue text-white rounded-lg">
                Telegram
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Earn 15% of your referrals' earnings for their first 90 days
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5" /> Active Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{campaign.name}</h3>
                <span className="text-sm text-gray-500">{campaign.period}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{campaign.reward}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress:</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Target:</span>
                  <span className="font-medium">{campaign.target}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Leaderboard */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart className="w-5 h-5" /> Top Referrers
        </h2>
        <div className="space-y-3">
          {leaderboard.map((entry, index) => (
            <div
              key={entry.name}
              className={`flex items-center justify-between p-3 rounded-lg ${
                entry.highlight ? "bg-purple-50" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-500">#{index + 1}</span>
                <span
                  className={`font-medium ${
                    entry.highlight ? "text-purple-600" : ""
                  }`}
                >
                  {entry.name}
                </span>
                {index < 3 && <Trophy className="w-4 h-4 text-yellow-500" />}
              </div>
              <div className="text-right">
                <div className="font-medium">{entry.referrals} referrals</div>
                <div className="text-sm text-gray-500">{entry.earnings}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Tiers */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5" /> Program Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                B
              </div>
              <h3 className="font-semibold">Bronze Tier</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 10% referral earnings</li>
              <li>• Basic analytics</li>
              <li>• Weekly payout</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg bg-gradient-to-b from-purple-50 to-white">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-silver rounded-full flex items-center justify-center">
                S
              </div>
              <h3 className="font-semibold">Silver Tier</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 15% referral earnings</li>
              <li>• Advanced analytics</li>
              <li>• Daily payout</li>
              <li>• Early access to features</li>
            </ul>
          </div>

          <div className="border p-4 rounded-lg bg-gradient-to-b from-yellow-50 to-white">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                G
              </div>
              <h3 className="font-semibold">Gold Tier</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 20% referral earnings</li>
              <li>• Premium analytics</li>
              <li>• Instant payout</li>
              <li>• VIP support</li>
              <li>• Governance voting</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Your Current Tier: Silver</h4>
              <p className="text-sm text-gray-500">15% earning rate</p>
            </div>
            <button className="flex items-center gap-1 text-purple-600">
              View Requirements <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Referral Program FAQ</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">How do I earn from referrals?</h3>
            <p className="text-gray-600 text-sm">
              You earn a percentage of your referrals' activities based on your
              current tier. Earnings are calculated in real-time and paid out
              according to your tier's schedule.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">When do I receive payments?</h3>
            <p className="text-gray-600 text-sm">
              Payout frequency depends on your tier: Bronze - weekly, Silver -
              daily, Gold - instantly. All payments are made in SOL to your
              connected wallet.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">
              Can I track individual referrals?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes, our dashboard provides detailed analytics for each referral
              including their activity history, earnings generated, and status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
