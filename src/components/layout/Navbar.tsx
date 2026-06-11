"use client";

import navigation from "@/config/navigation";
import site from "@/config/site";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isMusicalTheatrePage = pathname === "/musical-theatre";

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_85%,transparent)] backdrop-blur-xl"
      role="banner"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {isMusicalTheatrePage ? (
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--primary)]"
              aria-label="Back to tech portfolio"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to Tech
            </Link>
          ) : (
            <Link
              href="/"
              className="group"
              aria-label="Cameron Kilgore - Portfolio Home"
              title="Go to top"
            >
              <h1 className="text-sm font-semibold tracking-[0.2em]">
                {site.name.toUpperCase()}
              </h1>
              <p className="text-xs text-[var(--muted)] transition-colors group-hover:text-[var(--text)]">
                {site.role}
              </p>
            </Link>
          )}

          {/* Main Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            role="navigation"
            aria-label="Main navigation"
          >
            {!isMusicalTheatrePage &&
              navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary)]"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          {/* Theme Toggle */}
          <div role="region" aria-label="Theme toggle">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
