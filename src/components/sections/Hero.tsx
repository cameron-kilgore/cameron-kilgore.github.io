"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import site from "@/config/site";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <>
      <Section id="hero" className="pt-12 lg:pt-16">
        <div className="grid items-start gap-16 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="mb-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
              {site.role} at {site.company}
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              {site.name}
            </h1>

            <p className="max-w-2xl text-xl leading-8 text-[var(--muted)]">
              Building scalable financial technology, data platforms and
              AI-enabled tooling, grounded in accounting experience and
              computing science.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#experience">
                <Button as="span">
                  Explore Experience
                </Button>
              </a>

              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button as="span" variant="secondary">
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col items-center gap-6 lg:col-span-1"
          >
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
              <Image
                src="/images/profile.webp"
                alt="Cameron Kilgore"
                width={320}
                height={320}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Current
              </p>

              <p className="mt-3 text-lg font-semibold text-[var(--text)]">
                Valuation Control Tech @ JPMorganChase
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Scalable systems, data platforms and AI-enabled tooling.
              </p>

              <div className="mt-5 border-t border-[var(--border)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Next
                </p>
                <p className="mt-3 font-semibold text-[var(--text)]">
                  MPhil in Human-Inspired AI
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  University of Cambridge
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-col gap-6 lg:col-span-1"
          >
            <Stat
              label="Experience"
              value="3+ Years"
              subtitle="Accounting + Finance Software"
            />

            <Stat
              label="Cambridge"
              value="Incoming MPhil"
              subtitle="Human-Inspired AI"
            />

            <Stat
              label="Glasgow"
              value="First Class BSc"
              subtitle="Computing Science"
            />

            <Stat
              label="Previously"
              value="Amazon"
              subtitle="RSM UK"
            />
          </motion.div>
        </div>
      </Section>

      <div className="border-b border-[var(--border)]" />
    </>
  );
}

interface StatProps {
  label: string;
  value: string;
  subtitle: string;
}

function Stat({ label, value, subtitle }: StatProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
        {label}
      </p>

      <p className="mt-3 text-2xl font-bold tracking-tight">
        {value}
      </p>

      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        {subtitle}
      </p>
    </div>
  );
}
