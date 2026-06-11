import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {new Date().getFullYear()} Cameron Kilgore</span>
          <span>Built with Next.js</span>
        </div>
      </Container>
    </footer>
  );
}
