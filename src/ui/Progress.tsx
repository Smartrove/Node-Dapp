// components/ui/Progress.tsx
import { FC } from "react";
import { motion } from "framer-motion";

interface ProgressProps {
  value: number;
  color?: "purple" | "blue" | "green" | "orange";
  className?: string;
  showLabel?: boolean;
  animate?: boolean;
}

const colorClasses = {
  purple: "bg-purple-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
  orange: "bg-orange-600",
};

export const Progress: FC<ProgressProps> = ({
  value,
  color = "purple",
  className = "",
  showLabel = false,
  animate = true,
}) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden h-2.5 rounded-full bg-gray-200">
        <motion.div
          initial={animate ? { width: 0 } : false}
          animate={{ width: `${clampedValue}%` }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`h-full rounded-full ${colorClasses[color]} transition-colors duration-300`}
        >
          {showLabel && (
            <span className="absolute right-0 -top-6 text-sm text-gray-600">
              {clampedValue}%
            </span>
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Progress with Label component
interface ProgressWithLabelProps extends ProgressProps {
  label?: string;
  description?: string;
}

export const ProgressWithLabel: FC<ProgressWithLabelProps> = ({
  label,
  description,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {(label || description) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-sm font-medium">{label}</span>}
          {description && (
            <span className="text-sm text-gray-500">{description}</span>
          )}
        </div>
      )}
      <Progress {...props} />
    </div>
  );
};
