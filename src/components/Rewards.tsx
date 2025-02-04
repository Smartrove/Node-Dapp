import { FC } from "react";
import {
  Zap,
  Trophy,
  Gem,
  Coins,
  Clock,
  Shield,
  Calendar,
  Crosshair,
} from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "../ui/Progress";

export const Rewards: FC = () => {
  const dailyMissions = [
    {
      title: "Daily Check-in",
      xp: 50,
      progress: 100,
      status: "completed",
      action: "Claimed",
    },
    {
      title: "Complete 3 Tasks",
      xp: 150,
      progress: 2 / 3,
      status: "in-progress",
      action: "Complete 1 more",
    },
    {
      title: "Social Media Share",
      xp: 75,
      progress: 0,
      status: "locked",
      action: "Share Now",
    },
  ];

  const weeklyQuests = [
    {
      title: "Weekly Challenge",
      description: "Earn 1000 XP this week",
      reward: "250 Gems + Rare NFT",
      progress: 640,
      target: 1000,
    },
    {
      title: "Referral Master",
      description: "Invite 5 new users",
      reward: "500 Gems + Exclusive Badge",
      progress: 3,
      target: 5,
    },
    {
      title: "Trading Expert",
      description: "Complete 10 trades",
      reward: "300 Gems + Boost Token",
      progress: 7,
      target: 10,
    },
  ];

  const loyaltyTiers = [
    {
      level: "Bronze",
      xpRequired: 0,
      rewards: ["Basic Rewards", "Daily Gems"],
      current: true,
    },
    {
      level: "Silver",
      xpRequired: 5000,
      rewards: ["+20% Earnings", "Weekly NFT"],
      current: false,
    },
    {
      level: "Gold",
      xpRequired: 15000,
      rewards: ["+50% Earnings", "VIP Support"],
      current: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* XP & Currency Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-4">
          <Zap className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-sm text-gray-500">Total XP</h3>
            <p className="text-2xl font-bold">2,450</p>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg flex items-center gap-4">
          <Gem className="w-8 h-8 text-purple-600" />
          <div>
            <h3 className="text-sm text-gray-500">Gems</h3>
            <p className="text-2xl font-bold">1,230</p>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg flex items-center gap-4">
          <Coins className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="text-sm text-gray-500">Reward Tokens</h3>
            <p className="text-2xl font-bold">345</p>
          </div>
        </div>
      </div>

      {/* Daily Missions */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Crosshair className="w-5 h-5" /> Daily Missions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dailyMissions.map((mission, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="border p-4 rounded-lg"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium">{mission.title}</h3>
                <div className="flex items-center gap-1 text-sm text-blue-600">
                  <Zap className="w-4 h-4" /> {mission.xp} XP
                </div>
              </div>
              <Progress value={mission.progress} className="h-2 mb-3" />
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm ${
                    mission.status === "completed"
                      ? "text-green-600"
                      : mission.status === "in-progress"
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  {mission.status.replace("-", " ")}
                </span>
                <button
                  className={`px-3 py-1 rounded-lg text-sm ${
                    mission.status === "completed"
                      ? "bg-gray-100 cursor-default"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                  disabled={mission.status === "completed"}
                >
                  {mission.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Quests */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5" /> Weekly Quests
        </h2>
        <div className="space-y-4">
          {weeklyQuests.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium">{quest.title}</h3>
                  <p className="text-sm text-gray-500">{quest.description}</p>
                </div>
                <div className="flex items-center gap-1 text-purple-600">
                  <Gem className="w-4 h-4" /> {quest.reward}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Progress
                  value={(quest.progress / quest.target) * 100}
                  className="h-2 flex-1"
                />
                <span className="text-sm text-gray-500">
                  {quest.progress}/{quest.target}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" /> Loyalty Program
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loyaltyTiers.map((tier, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${
                tier.current
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    tier.current ? "bg-purple-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </div>
                <h3 className="font-medium">{tier.level} Tier</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">
                  Requires: {tier.xpRequired} XP
                </div>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  {tier.rewards.map((reward, i) => (
                    <li key={i}>{reward}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reward Exchange */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Gem className="w-5 h-5" /> Gem Exchange
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { gems: 100, reward: "$10 Trading Credit" },
            { gems: 250, reward: "Exclusive NFT" },
            { gems: 500, reward: "VIP Day Pass" },
            { gems: 1000, reward: "Hardware Wallet" },
          ].map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="border p-4 rounded-lg text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Gem className="w-6 h-6 text-purple-600" />
                <span className="text-2xl font-bold">{offer.gems}</span>
              </div>
              <p className="text-gray-600 mb-4">{offer.reward}</p>
              <button className="w-full py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200">
                Redeem Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievement System */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5" /> Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Novice Trader", progress: "4/10", icon: "🥉" },
            { title: "Social Butterfly", progress: "8/10", icon: "🦋" },
            { title: "Diamond Hands", progress: "30d", icon: "💎" },
            { title: "Early Adopter", progress: "Unlocked", icon: "🚀" },
          ].map((achievement, index) => (
            <div key={index} className="border p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h3 className="font-medium mb-1">{achievement.title}</h3>
              <p className="text-sm text-gray-500">{achievement.progress}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
