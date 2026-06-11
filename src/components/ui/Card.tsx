interface Props {
  children: React.ReactNode;
}

export default function Card({
  children,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary)]
      "
    >
      {children}
    </div>
  );
}