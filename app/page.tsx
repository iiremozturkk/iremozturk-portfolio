import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import MouseFollower from "./components/mouse-follower"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MouseFollower />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}