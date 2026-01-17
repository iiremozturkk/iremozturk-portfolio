"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} İrem Öztürk. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
