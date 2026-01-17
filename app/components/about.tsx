"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Sparkles, Server, Palette, Database, Brain, Code, Globe } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { label: "Double Major", value: "2", icon: GraduationCap },
    { label: "Internship", value: "1", icon: Briefcase },
    { label: "Languages", value: "4", icon: Sparkles },
  ]

  const techStack = [
    {
      name: "Backend",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: ["Go", "Python", "Node.js", "Java"],
    },
    {
      name: "Frontend",
      icon: Palette,
      color: "from-violet-500 to-purple-500",
      skills: ["Vue.js", "HTML5", "CSS3", "JavaScript"],
    },
    { name: "Database", icon: Database, color: "from-orange-500 to-amber-500", skills: ["MySQL", "PostgreSQL"] },
    { name: "AI/ML", icon: Brain, color: "from-pink-500 to-rose-500", skills: ["TensorFlow", "PyTorch"] },
  ]

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div className="relative flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Tech Stack Grid */}
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                    />

                    {/* Icon with Gradient */}
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tech.color}`}
                    >
                      <tech.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Tech Name */}
                    <h3 className="mb-2 font-semibold text-foreground">{tech.name}</h3>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1">
                      {tech.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-background/80 px-2 py-0.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
                className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-card shadow-lg"
              >
                <Code className="h-7 w-7 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-card shadow-lg"
              >
                <Globe className="h-6 w-6 text-cyan-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-4 font-mono text-sm text-primary"
            >
              — About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-6 text-3xl font-bold text-foreground md:text-4xl"
            >
              I love coding and <span className="text-gradient">solving problems</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I am studying Computer Engineering at Haliç University and pursuing a double major in Software
                Engineering.
              </p>
              <p>
                I am actively improving myself in <span className="text-foreground">C++, Python, Java, and Go</span>{" "}
                programming languages. I have a special interest in Artificial Intelligence and Full Stack Development.
              </p>
              <p>
                I work on integrated projects that include backend, frontend, and database integration. My goal is to
                make innovative contributions to the technology world by combining my academic knowledge with practical
                experience.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/50 p-4 text-center transition-colors hover:border-primary/50"
                >
                  <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
