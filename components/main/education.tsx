"use client";

import { motion } from "framer-motion";

const EDUCATION_DATA = [
  {
    year: "2023 — PRESENT",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    detail: "CGPA: 6.46",
  },
  {
    year: "2023",
    degree: "Senior Secondary School (12th Grade)",
    institution: "Kailash Shubhash Inter College",
    location: "Pratapgarh, UP",
    detail: "Percentage: 72% | Subjects: Physics, Chemistry, Mathematics, Hindi, English",
  },
  {
    year: "2021",
    degree: "Secondary School (10th Grade)",
    institution: "St. Anthony Inter College",
    location: "Pratapgarh, UP",
    detail: "Percentage: 89.3%",
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="w-full px-10 py-20 max-w-5xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-2 block">
          02. Education
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Education
        </h2>
        <p className="text-gray-400 font-mono text-sm">
          My academic background and qualifications.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-purple-700 to-transparent" />

        <div className="flex flex-col gap-12 pl-8">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-purple-500 border-2 border-purple-300 shadow-[0_0_10px_#a855f7]" />

              {/* Year badge */}
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-1 block">
                {item.year}
              </span>

              {/* Degree */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {item.degree}
              </h3>

              {/* Institution & Location */}
              <p className="font-mono text-sm text-gray-400 mb-2">
                {item.institution} — {item.location}
              </p>

              {/* Detail */}
              <p className="font-mono text-sm text-gray-300 leading-relaxed max-w-2xl">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
