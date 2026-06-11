"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import Section from "@/components/ui/Section";

export default function Projects() {
  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="mb-4 text-4xl font-bold">Projects</h2>
        <p className="text-lg text-[var(--muted)]">
          A selection of projects I'm proud of, from winning hackathons to
          production systems.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden bg-[var(--card)]">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="mb-6 text-[var(--muted)]">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--secondary)] px-3 py-1 text-sm font-medium text-[var(--text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-[var(--primary)] hover:underline"
                  >
                    View Project -&gt;
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--primary)] hover:underline"
                  >
                    GitHub -&gt;
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
