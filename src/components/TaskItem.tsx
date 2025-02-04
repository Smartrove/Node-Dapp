import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface TaskItemProps {
  label: string;
  icon: LucideIcon;
  onAction: () => void;
}

export const TaskItem: FC<TaskItemProps> = ({
  label,
  icon: Icon,
  onAction,
}) => (
  <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
    <span className="text-gray-700">{label}</span>
    <button
      onClick={onAction}
      className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
    >
      <Icon className="w-5 h-5" />
      Link
    </button>
  </div>
);
