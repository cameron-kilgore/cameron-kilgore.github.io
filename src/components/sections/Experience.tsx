"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { experience } from "@/data/experience";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-4xl font-bold">Experience</h2>
        <p className="mb-12 text-lg text-[var(--muted)]">
          Building scalable systems across fintech, consulting and cloud
          infrastructure.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid gap-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 lg:grid-cols-[12rem_1fr]"
          >
            <div className="flex items-start">
              <div
                className={cn(
                  "relative h-20 w-44 overflow-hidden rounded-xl border p-4",
                  exp.logoBackground === "dark" &&
                    "border-slate-700 bg-slate-950",
                  exp.logoBackground === "light" &&
                    "border-slate-200 bg-white",
                  (!exp.logoBackground || exp.logoBackground === "surface") &&
                    "border-[var(--border)] bg-[var(--card)]"
                )}
              >
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg text-[var(--muted)]">{exp.company}</p>
                </div>
                <p className="text-sm font-medium text-[var(--primary)]">
                  {exp.period}
                </p>
              </div>

              <p className="mb-6 text-[var(--muted)]">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-[var(--muted)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
