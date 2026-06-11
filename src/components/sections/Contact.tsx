"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import site from "@/config/site";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-4 text-4xl font-bold">Get in Touch</h2>
        <p className="mb-12 text-lg text-[var(--muted)]">
          Whether you have a question, a project opportunity, or just want to connect—feel free to reach out. Im always interested in discussing technology, finance, and AI.
        </p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <a href={`mailto:${site.email}`}>
            <Button size="lg">
              Send me an email
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--text)] transition-all duration-200 hover:bg-[var(--surface)] hover:shadow-md"
          >
            <ExternalLink size={20} />
            GitHub
          </Link>

          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--text)] transition-all duration-200 hover:bg-[var(--surface)] hover:shadow-md"
          >
            <ExternalLink size={20} />
            LinkedIn
          </Link>

          <Link
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-[var(--text)] transition-all duration-200 hover:bg-[var(--surface)] hover:shadow-md"
          >
            <Mail size={20} />
            Email
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]"
        >
          © 2024 Cameron Kilgore. Built with Next.js, Tailwind CSS, and Framer Motion.
        </motion.p>
      </motion.div>
    </Section>
  );
}
