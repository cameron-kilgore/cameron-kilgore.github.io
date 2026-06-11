export default function Footer() {
    return (
      <footer className="border-t py-10">
        <div className="container flex justify-between text-sm text-muted">
          <span>© {new Date().getFullYear()} Cameron Kilgore</span>
  
          <span className="mono">Built with Next.js</span>
        </div>
      </footer>
    );
  }