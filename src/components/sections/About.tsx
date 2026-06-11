"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/data/about";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="mb-4 text-4xl font-bold">About</h2>
      </motion.div>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-8 text-xl leading-relaxed text-[var(--text)]">
            {aboutContent.intro}
          </p>

          <div className="space-y-8">
            {aboutContent.details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-3 text-xl font-bold">{detail.title}</h3>
                <p className="text-[var(--muted)]">{detail.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
