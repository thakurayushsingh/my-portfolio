"use client";

import { motion } from "framer-motion";

const TRAININGS = [
  {
    id: 1,
    provider: "CIPHERSCHOOLS",
    location: "India · Online Training",
    providerIcon: "/certifications/cipherschools-icon.png",
    title: "CPP with OOPs Programming Language",
    topics: "Object-Oriented Programming · Systems Language · Core CS",
    started: "Jun 4, 2025",
    completed: "Jul 15, 2025",
    hours: "70 hrs",
    institution: "LPU",
    certificateId: "CSW2025-14891",
    status: "COMPLETED",
    pdf: "/certifications/cipherschools-cpp.pdf",
  },
];

export const Training = () => {
  return (
    <section
      id="training"
      className="flex flex-col items-center justify-center py-20 w-full"
    >
      <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-2 block text-center">
        06. Training
      </span>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
      >
        Training
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-400 text-center max-w-xl mb-12"
      >
        Hands-on training programs and professional development courses.
      </motion.p>

      <div className="flex flex-col gap-6 px-10 w-full max-w-4xl">
        {TRAININGS.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0d0d1a] border border-[#2a1a5e] rounded-2xl p-6 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all duration-300"
          >
            {/* Header row */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-lg overflow-hidden">
                  🎓
                </div>
                <div>
                  <p className="text-orange-400 font-bold text-sm tracking-wide">
                    {t.provider}
                  </p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 bg-green-900/40 text-green-400 border border-green-700/50 text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                {t.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white font-bold text-2xl mb-1">{t.title}</h3>
            <p className="text-gray-400 text-sm mb-5">{t.topics}</p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#13132a] rounded-xl p-4 mb-5">
              {[
                { label: "STARTED", value: t.started, color: "text-white" },
                { label: "COMPLETED", value: t.completed, color: "text-white" },
                { label: "HOURS", value: t.hours, color: "text-cyan-400" },
                { label: "INSTITUTION", value: t.institution, color: "text-orange-400" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-gray-500 text-[10px] font-mono tracking-widest mb-1">
                    {stat.label}
                  </p>
                  <p className={`font-bold text-sm ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mb-5">
              <div className="flex justify-between text-xs text-gray-500 font-mono mb-1">
                <span>Jun 2025</span>
                <span>Jul 2025</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[#1a1a2e] overflow-hidden">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-400" />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-gray-500 text-[10px] font-mono tracking-widest">
                  CERTIFICATE ID
                </p>
                <p className="text-gray-300 text-sm font-mono">
                  {t.certificateId}
                </p>
              </div>
              <a
                href={t.pdf}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 bg-orange-900/30 hover:bg-orange-900/50 border border-orange-700/60 text-orange-400 text-sm font-mono px-4 py-2 rounded-lg transition-all"
              >
                View Certificate ↗
              </a>
            </div>

            {/* Embedded Certificate */}
            <div className="w-full rounded-xl overflow-hidden border border-[#2a1a5e]">
              <iframe
                src={`${t.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full"
                style={{ height: "500px" }}
                title="CipherSchools Certificate"
              />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
