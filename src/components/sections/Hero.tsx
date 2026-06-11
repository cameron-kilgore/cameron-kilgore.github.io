"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import site from "@/config/site";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <>
      <Section id="hero">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-3">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="mb-6 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
              Software Engineer • Financial Technology
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Building technology for
              <span className="block text-[var(--primary)]">
                financial markets.
              </span>
            </h1>

            <p className="mb-2 text-2xl font-semibold">
              {site.name}
            </p>

            <p className="mb-8 text-lg text-[var(--muted)]">
              {site.role} • {site.company}
            </p>

            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#experience">
                <Button>
                  Explore Experience
                </Button>
              </a>

              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Center Content - Image + Current Focus */}
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

            {/* Current Focus Card */}
            <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Current Focus
              </p>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="font-semibold text-[var(--text)]">Software Engineer</p>
                  <p className="text-sm text-[var(--muted)]">J.P. Morgan</p>
                </div>

                <div>
                  <p className="font-semibold text-[var(--text)]">Incoming MPhil</p>
                  <p className="text-sm text-[var(--muted)]">University of Cambridge • Human-Inspired AI</p>
                </div>

                <div>
                  <p className="font-semibold text-[var(--text)]">Focus Areas</p>
                  <p className="text-sm text-[var(--muted)]">Financial Technology • AI</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="flex flex-col gap-6 lg:col-span-1"
          >
            <Stat
              label="ACADEMICS"
              value="First Class"
              subtitle="Computing Science"
              subsubtitle="University of Glasgow"
            />

            <Stat
              label="EDUCATION"
              value="MPhil"
              subtitle="Human-Inspired AI"
              subsubtitle="University of Cambridge"
            />

            <Stat
              label="EXPERIENCE"
              value="4+ Years"
              subtitle="Finance & Technology"
              subsubtitle="Accounting & Software Engineering"
            />

            <Stat
              label="COMPANIES"
              value="3"
              subtitle="Industry Leaders"
              subsubtitle="J.P. Morgan • Amazon • RSM UK"
            />
          </motion.div>
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 border-t border-[var(--border)] pt-12"
        >
          <p className="max-w-3xl text-center text-xl font-medium leading-relaxed text-[var(--text)]">
            Combining accounting, software engineering and artificial intelligence to build scalable financial systems.
          </p>
        </motion.div>
      </Section>

      {/* Divider */}
      <div className="border-b border-[var(--border)]" />
    </>
  );
}

interface StatProps {
  label: string;
  value: string;
  subtitle: string;
  subsubtitle: string;
}

function Stat({ label, value, subtitle, subsubtitle }: StatProps) {
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

      <p className="mt-2 font-semibold">
        {subtitle}
      </p>

      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
        {subsubtitle}
      </p>
    </div>
  );
}