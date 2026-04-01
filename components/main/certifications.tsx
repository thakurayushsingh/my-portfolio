"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "March 05, 2026",
    validUntil: "March 05, 2028",
    icon: "🏆",
    image: "/certifications/oracle-data-platform.png",
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "September 10, 2025",
    validUntil: null,
    icon: "🏅",
    image: "/certifications/oracle-cloud-ai.png",
  },
  {
    id: 3,
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL — IIIT Hyderabad / IIT Madras",
    date: "Jul-Oct 2025",
    validUntil: null,
    icon: "⭐",
    image: "/certifications/nptel-privacy.png",
  },
];

export const Certifications = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 w-full"
    >
      <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase mb-2 block text-center">
        05. Certifications
      </span>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
      >
        Certifications
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-400 text-center max-w-xl mb-12"
      >
        Industry-recognized credentials demonstrating expertise in cloud, AI,
        and security.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 w-full max-w-6xl">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => cert.image && setLightboxImage(cert.image)}
            className="bg-[#0d0d1a] border border-[#2a1a5e] rounded-2xl p-6 cursor-pointer hover:border-purple-500 hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all duration-300"
          >
            <div className="text-4xl mb-4">{cert.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-1">
              {cert.title}
            </h3>
            <p className="text-purple-400 text-sm mb-4">{cert.issuer}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-400 text-sm">{cert.date}</span>
              <span className="bg-green-700 text-green-200 text-xs px-3 py-1 rounded-full font-medium">
                ✓ Earned
              </span>
            </div>
            {cert.validUntil && (
              <p className="text-gray-500 text-xs mt-2">
                Valid until: {cert.validUntil}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10 bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxImage}
              alt="Certificate"
              className="rounded-xl w-full object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};
