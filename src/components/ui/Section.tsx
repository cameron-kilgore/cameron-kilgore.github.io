import Container from "./Container";

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="py-24 lg:py-36"
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}