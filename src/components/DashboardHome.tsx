// components/DashboardHome.tsx
import { FC } from "react";
import { TaskItem } from "./TaskItem";
import {
  Link,
  Users,
  Zap,
  Shield,
  Activity,
  Globe,
  Trophy,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", earnings: 4.2 },
  { day: "Tue", earnings: 2.8 },
  { day: "Wed", earnings: 6.3 },
  { day: "Thu", earnings: 3.6 },
  { day: "Fri", earnings: 7.1 },
  { day: "Sat", earnings: 5.4 },
  { day: "Sun", earnings: 8.0 },
];

export const DashboardHome: FC = () => {
  const networkStatus = navigator.onLine ? "Connected" : "Offline";
  const ipAddress = "192.168.1.1"; // Replace with real IP fetching logic
  const referralCount = 42;
  const seasonEarnings = 86.4;
  const latency = "58ms";
  const connectionType = navigator.connection || "4G";

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-purple-50 p-4 rounded-lg flex items-center gap-4">
          <Users className="w-8 h-8 text-purple-600" />
          <div>
            <h3 className="text-sm text-gray-500">Referrals</h3>
            <p className="text-2xl font-bold">{referralCount}</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg flex items-center gap-4">
          <Zap className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="text-sm text-gray-500">Season Earnings</h3>
            <p className="text-2xl font-bold">${seasonEarnings}</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-4">
          <Activity className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-sm text-gray-500">Network Status</h3>
            <p className="text-xl font-bold">{networkStatus}</p>
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg flex items-center gap-4">
          <Globe className="w-8 h-8 text-orange-600" />
          <div>
            <h3 className="text-sm text-gray-500">IP Address</h3>
            <p className="text-xl font-mono">{ipAddress}</p>
          </div>
        </div>
      </div>

      {/* Earning Statistics */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5" /> Earnings Overview
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#4f46e5"
                strokeWidth={2}
                dot={{ fill: "#4f46e5" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Missions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5" /> Active Missions
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">Refer 5 Friends</h3>
                <p className="text-sm text-gray-500">3/5 completed</p>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">Earn $50 This Week</h3>
                <p className="text-sm text-gray-500">$32.50/$50.00</p>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Details */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" /> Network Performance
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Connection Type:</span>
              {/* <span className="font-medium">{connectionType}</span> */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Latency:</span>
              <span className="font-medium">{latency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Data Usage:</span>
              <span className="font-medium">2.4GB/5GB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Leaderboard */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" /> Top Referrals
        </h2>
        <div className="space-y-3">
          {["Alice", "Bob", "Charlie", "Diana", "Ethan"].map((name, index) => (
            <div
              key={name}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-500">#{index + 1}</span>
                <span className="font-medium">{name}</span>
                {index < 3 && <span className="text-yellow-500">🏅</span>}
              </div>
              <span className="text-purple-600">
                {Math.floor(Math.random() * 20) + 5} referrals
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" /> Account Verification
        </h2>
        <div className="space-y-4">
          <TaskItem
            label="Link Discord"
            icon={Link}
            onAction={() => console.log("Link Discord")}
          />
          <TaskItem
            label="Link Telegram"
            icon={Link}
            onAction={() => console.log("Link Telegram")}
          />
        </div>
      </div>
    </div>
  );
};
