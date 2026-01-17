"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Folder } from "lucide-react"

const projects = [
  {
    title: "Industrial Attack Detection System",
    description:
      "A machine learning-based security project developed for detecting cyber attacks in industrial systems.",
    tags: ["Python", "Machine Learning", "Cybersecurity", "AI"],
    github: "https://github.com/iiremozturkk/Industrial-Attack-Detection-System",
    featured: true,
  },
  {
    title: "Go Product Management",
    description: "A product management system and RESTful API application developed with Go programming language.",
    tags: ["Go", "REST API", "Backend", "Database"],
    github: "https://github.com/iiremozturkk/GoProductManagement",
    featured: true,
  },
  {
    title: "Smart Transportation Database",
    description: "A comprehensive database management project designed for smart transportation systems.",
    tags: ["SQL", "Database Design", "Data Management"],
    github: "https://github.com/iiremozturkk/Smart_Transportation_Database",
    featured: true,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">— Projects</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Projects I've <span className="text-gradient">Worked On</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I work on various projects involving backend, frontend, and database integration.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 transition-all hover:border-primary/30"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/iiremozturkk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            Visit my GitHub profile for more projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
