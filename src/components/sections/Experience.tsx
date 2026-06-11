"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import Section from "@/components/ui/Section";

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
          Building scalable systems across fintech, consulting, and cloud infrastructure.
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
            className="grid gap-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 lg:grid-cols-3"
          >
            {/* Logo */}
            <div className="flex items-start lg:col-span-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--card)]">
                {exp.logo.endsWith(".svg") ? (
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                ) : (
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-baseline justify-between">
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
                  <li key={highlight} className="flex gap-3 text-[var(--muted)]">
                    <span className="text-[var(--primary)]">•</span>
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
