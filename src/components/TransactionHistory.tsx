import { FC, useState } from "react";
import {
  Calendar,
  Filter,
  Search,
  Download,
  UserCheck,
  Coins,
  Gift,
  X,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Transaction {
  id: string;
  date: Date;
  type: "staking" | "referral" | "nft" | "withdrawal";
  amount: number;
  status: "completed" | "pending" | "failed";
  referralName?: string;
}

export const TransactionHistory: FC = () => {
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      date: new Date("2024-03-15"),
      type: "staking",
      amount: 12.4,
      status: "completed",
    },
    {
      id: "2",
      date: new Date("2024-03-14"),
      type: "referral",
      amount: 8.2,
      status: "completed",
      referralName: "Alice",
    },
    {
      id: "3",
      date: new Date("2024-03-13"),
      type: "nft",
      amount: 24.0,
      status: "pending",
    },
    {
      id: "4",
      date: new Date("2024-03-12"),
      type: "referral",
      amount: 5.5,
      status: "completed",
      referralName: "Bob",
    },
    {
      id: "5",
      date: new Date("2024-03-11"),
      type: "withdrawal",
      amount: -18.0,
      status: "completed",
    },
  ]);

  const [filters, setFilters] = useState({
    type: "all",
    startDate: null as Date | null,
    endDate: null as Date | null,
    referralQuery: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesType =
      filters.type === "all" || transaction.type === filters.type;
    const matchesDate =
      (!filters.startDate || transaction.date >= filters.startDate) &&
      (!filters.endDate || transaction.date <= filters.endDate);
    const matchesReferral = transaction.referralName
      ?.toLowerCase()
      .includes(filters.referralQuery.toLowerCase());

    return (
      matchesType &&
      matchesDate &&
      (filters.referralQuery ? matchesReferral : true)
    );
  });

  const getTypeDetails = (type: string) => {
    switch (type) {
      case "staking":
        return {
          label: "Staking Rewards",
          icon: <Coins className="w-4 h-4" />,
          color: "text-purple-600",
        };
      case "referral":
        return {
          label: "Referral Bonus",
          icon: <UserCheck className="w-4 h-4" />,
          color: "text-green-600",
        };
      case "nft":
        return {
          label: "NFT Sale",
          icon: <Gift className="w-4 h-4" />,
          color: "text-blue-600",
        };
      case "withdrawal":
        return {
          label: "Withdrawal",
          icon: <Download className="w-4 h-4" />,
          color: "text-red-600",
        };
      default:
        return { label: "", icon: null, color: "" };
    }
  };

  const exportToCSV = () => {
    // CSV export implementation
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Filter className="w-5 h-5" /> Transaction History
        </h2>

        <div className="flex flex-wrap gap-3">
          <select
            className="px-3 py-2 border rounded-lg"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="all">All Types</option>
            <option value="staking">Staking</option>
            <option value="referral">Referral</option>
            <option value="nft">NFT</option>
            <option value="withdrawal">Withdrawal</option>
          </select>

          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <Calendar className="w-4 h-4 text-gray-500" />
            <DatePicker
              selected={filters.startDate}
              onChange={(date) => setFilters({ ...filters, startDate: date })}
              placeholderText="Start Date"
              className="bg-transparent w-28"
            />
            <span className="text-gray-400">-</span>
            <DatePicker
              selected={filters.endDate}
              onChange={(date) => setFilters({ ...filters, endDate: date })}
              placeholderText="End Date"
              className="bg-transparent w-28"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search referrals..."
              className="bg-transparent outline-none"
              value={filters.referralQuery}
              onChange={(e) =>
                setFilters({ ...filters, referralQuery: e.target.value })
              }
            />
          </div>

          <button
            onClick={() =>
              setFilters({
                type: "all",
                startDate: null,
                endDate: null,
                referralQuery: "",
              })
            }
            className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-3">Date</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Referral</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((transaction) => {
                const typeDetails = getTypeDetails(transaction.type);
                return (
                  <tr
                    key={transaction.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-4">
                      {transaction.date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="py-4 flex items-center gap-2">
                      <span className={typeDetails.color}>
                        {typeDetails.icon}
                      </span>
                      {typeDetails.label}
                    </td>
                    <td
                      className={`py-4 font-medium ${
                        transaction.amount > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          transaction.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : transaction.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-4">
                      {transaction.referralName && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          {transaction.referralName}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {filteredTransactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No transactions found matching your filters
        </div>
      )}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg"
        >
          <Download className="w-4 h-4" /> Export to CSV
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 hover:bg-gray-100 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-1">Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage * itemsPerPage >= filteredTransactions.length}
            className="px-3 py-1 hover:bg-gray-100 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
