"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "IT Department Intern",
    company: "Ensmart Technology",
    period: "June 2025 - August 2025",
    location: "Istanbul",
    description: [
      "Maintained internal software systems and developed new features with a full-stack approach",
      "Debugged and optimized performance in RESTful APIs developed with Python and Go",
      "Developed high-performance backend services and API modules compatible with microservice architecture",
      "Application containerization and deployment processes with Docker",
      "Data manipulation and reporting by writing complex queries in MySQL databases",
    ],
    skills: ["Python", "Go", "Docker", "MySQL", "RESTful API", "Postman"],
  },
]

const education = [
  {
    school: "Haliç University",
    degree: "Computer Engineering",
    period: "2022 - 2027",
  },
  {
    school: "Haliç University",
    degree: "Software Engineering (Double Major)",
    period: "2024 - 2028",
  },
  {
    school: "Rotary 100. Yıl Anatolian High School",
    degree: "High School",
    period: "2016 - 2020",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm text-primary">— Experience & Education</span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            My Career <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold text-foreground">
              <span className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
              Work Experience
              <span className="h-px flex-1 bg-gradient-to-l from-primary to-transparent" />
            </h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold text-foreground">
              <span className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
              Education
              <span className="h-px flex-1 bg-gradient-to-l from-primary to-transparent" />
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl border border-border bg-card/50 p-5 transition-all hover:border-primary/30"
                >
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-primary">{edu.school}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 rounded-3xl border border-border bg-card/50 p-6"
            >
              <h4 className="mb-4 font-semibold text-foreground">Languages</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Turkish</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">English</span>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">B2 Level</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
