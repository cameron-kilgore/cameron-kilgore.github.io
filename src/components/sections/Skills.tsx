"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Section from "@/components/ui/Section";

export default function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="mb-4 text-4xl font-bold">Skills</h2>
        <p className="text-lg text-[var(--muted)]">
          A diverse skillset spanning backend systems, frontend development, data engineering, and cloud infrastructure.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h3 className="mb-6 text-2xl font-bold">{skillGroup.category}</h3>

            <div className="flex flex-wrap gap-3">
              {skillGroup.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -2 }}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 font-medium text-[var(--text)] transition-colors duration-200 hover:bg-[var(--primary)] hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
