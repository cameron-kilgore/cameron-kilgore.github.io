"use client";

import { motion } from "framer-motion";
import { linkedInStats } from "@/data/analytics";
import Section from "@/components/ui/Section";

export default function Analytics() {
  return (
    <Section id="analytics">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="mb-4 text-4xl font-bold">Analytics</h2>
        <p className="text-lg text-[var(--muted)]">
          A snapshot of my professional presence and engagement across the web.
        </p>
      </motion.div>

      {/* LinkedIn Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <StatCard label="LinkedIn Connections" value={linkedInStats.connections} />
        <StatCard label="LinkedIn Followers" value={linkedInStats.followers} />
        <StatCard label="Profile Impressions" value={linkedInStats.impressions} />
        <StatCard label="Post Engagements" value={linkedInStats.engagements} />
      </motion.div>


      {/* Charts Grid - Removed for future refinement */}
    </Section>
  );
}

interface StatCardProps {
  label: string;
  value: number;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <p className="text-sm font-medium text-[var(--muted)]">{label}</p>
      <p className="mt-3 text-3xl font-bold text-[var(--primary)]">{value}</p>
    </div>
  );
}
