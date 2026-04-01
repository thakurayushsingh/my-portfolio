"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="w-full px-10 py-20 max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-2 block">
          01. About
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About Me
        </h2>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[#0d0d1a]/70 border border-[#7042f88b] rounded-2xl p-8 md:p-10 backdrop-blur-sm space-y-5 text-gray-300 text-[1.05rem] leading-relaxed"
      >
        <p>
          Hello! I&apos;m{" "}
          <strong className="text-white">Ayush Singh</strong>, an aspiring Cloud
          &amp; DevOps Engineer currently pursuing my B.Tech in CSE from{" "}
          <span className="text-cyan-400">Lovely Professional University</span>.
        </p>
        <p>
          My journey is driven by an obsession with infrastructure — I don&apos;t
          just study cloud, I deploy on it. I specialize in{" "}
          <strong className="text-white">AWS, Docker, and Kubernetes</strong> and
          have hands-on experience building CI/CD pipelines and managing
          containerized deployments on EC2 &amp; Minikube.
        </p>
        <p>
          When I&apos;m not breaking prod (locally), you can find me chasing
          certifications, tinkering with new DevOps tools, or automating
          something that probably didn&apos;t need automating.
        </p>
      </motion.div>
    </section>
  );
};
