import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-xl font-medium transition-all duration-300",

        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3",
        size === "lg" && "px-8 py-4 text-lg",

        variant === "primary" &&
          "bg-[var(--primary)] text-white hover:opacity-90",

        variant === "secondary" &&
          "border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
      )}
    >
      {children}
    </button>
  );
}