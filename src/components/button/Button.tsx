import { motion } from "framer-motion";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // Base classes for all buttons
  const baseClasses =
    "inline-block cursor-pointer border-0 rounded-full font-bold leading-none font-sans";

  // Primary vs secondary styling
  const variantClasses = primary
    ? "bg-indigo-600 text-white"
    : "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] bg-transparent text-gray-800";

  // Size variants
  const sizeClasses = {
    small: "px-4 py-2.5 text-xs",
    medium: "px-5 py-2.5 text-sm",
    large: "px-6 py-3 text-base",
  };

  const className = [baseClasses, variantClasses, sizeClasses[size]].join(" ");

  return (
    <motion.button
      type="button"
      className={className}
      style={backgroundColor ? { backgroundColor } : {}}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1, ease: "easeInOut" },
      }}
      whileFocus={{
        scale: 1.02,
        boxShadow: primary
          ? "0 0 0 3px rgba(99, 102, 241, 0.3)"
          : "0 0 0 3px rgba(0, 0, 0, 0.1)",
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      {...props}
    >
      {label}
    </motion.button>
  );
};
