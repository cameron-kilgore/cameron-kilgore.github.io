import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "text-5xl font-bold tracking-tight lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold lg:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className }: Props) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-[var(--muted)]",
        className
      )}
    >
      {children}
    </p>
  );
}