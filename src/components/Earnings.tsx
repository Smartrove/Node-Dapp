import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import {
  ShieldCheck,
  AlertCircle,
  Wallet,
  Coins,
  Calendar,
  Zap,
  BadgeCheck,
  Lock,
} from "lucide-react";
import { Progress } from "../ui/Progress";

export const Earnings: FC = () => {
  const verificationStatus = {
    verified: false,
    stepsCompleted: 2,
    totalSteps: 3,
  };

  const seasonalEarnings = [
    { season: "Season One", earnings: 42.5 },
    { season: "Season Two", earnings: 68.2 },
    { season: "Season Three", earnings: 56.8 },
  ];

  const earningsData = [
    { date: "Jan", earnings: 4.2 },
    { date: "Feb", earnings: 2.8 },
    { date: "Mar", earnings: 6.3 },
    { date: "Apr", earnings: 3.6 },
    { date: "May", earnings: 7.1 },
    { date: "Jun", earnings: 5.4 },
  ];

  const earningsBreakdown = [
    { name: "Staking", value: 45 },
    { name: "Referrals", value: 30 },
    { name: "Liquidity", value: 15 },
    { name: "NFTs", value: 10 },
  ];

  const COLORS = ["#6366f1", "#3b82f6", "#10b981", "#f59e0b"];

  return (
    <div className="space-y-8">
      {/* Wallet Verification Status */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          {verificationStatus.verified ? (
            <ShieldCheck className="w-5 h-5 text-green-600" />
          ) : (
            <AlertCircle className="w-5 h-5 text-yellow-600" />
          )}
          Wallet Verification
        </h2>

        {!verificationStatus.verified ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Verification Progress:</span>
              <span className="font-medium">
                {verificationStatus.stepsCompleted}/
                {verificationStatus.totalSteps}
              </span>
            </div>
            <Progress
              value={
                (verificationStatus.stepsCompleted /
                  verificationStatus.totalSteps) *
                100
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div
                className={`p-4 rounded-lg ${
                  verificationStatus.stepsCompleted >= 1
                    ? "bg-green-50"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center 
                    ${
                      verificationStatus.stepsCompleted >= 1
                        ? "bg-green-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    1
                  </span>
                  <h3 className="font-medium">KYC Completed</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Verify your identity documents
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  verificationStatus.stepsCompleted >= 2
                    ? "bg-green-50"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center 
                    ${
                      verificationStatus.stepsCompleted >= 2
                        ? "bg-green-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    2
                  </span>
                  <h3 className="font-medium">Wallet Connect</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Link your external wallet
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  verificationStatus.stepsCompleted >= 3
                    ? "bg-green-50"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center 
                    ${
                      verificationStatus.stepsCompleted >= 3
                        ? "bg-green-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    3
                  </span>
                  <h3 className="font-medium">2FA Enabled</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Set up two-factor authentication
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-green-50 rounded-lg flex items-center gap-4">
            <BadgeCheck className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-medium">Wallet Fully Verified</h3>
              <p className="text-sm text-gray-600">
                Maximum security and withdrawal limits enabled
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Coins className="w-5 h-5" /> All-Time Earnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ... same stats cards ... */}
        </div>

        <div className="mt-8 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={earningsData}>
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Bar
                dataKey="earnings"
                fill="url(#colorEarnings)"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Seasonal Earnings Breakdown */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" /> Seasonal Earnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {seasonalEarnings.map((season, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{season.season}</h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                    ${season.earnings}
                  </span>
                </div>
                <Progress
                  value={(season.earnings / 100) * 100}
                  className="mt-2"
                  color="purple"
                />
              </div>
            ))}
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={earningsBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {earningsBreakdown.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5" /> Recent Transactions
        </h2>
        <div className="space-y-4">
          {[
            {
              date: "2024-03-15",
              description: "Staking Rewards",
              amount: 12.4,
            },
            { date: "2024-03-12", description: "Referral Bonus", amount: 8.2 },
            { date: "2024-03-10", description: "NFT Sale", amount: 24.0 },
          ].map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <div className="font-medium">{transaction.description}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className="text-purple-600 font-medium">
                +${transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
