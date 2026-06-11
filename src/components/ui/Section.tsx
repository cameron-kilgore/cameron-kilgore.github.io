import Container from "./Container";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={cn("py-24 lg:py-36", className)}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}
