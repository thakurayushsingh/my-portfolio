"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Cloud &amp; DevOps Engineer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-7xl font-black text-white max-w-[600px] w-auto h-auto"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          <span>
            Ayush Singh
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Cloud &amp;
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            DevOps
          </span>
          <span>
            Engineer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Building scalable cloud infrastructure on AWS with Docker, Kubernetes,
          Terraform, and CI/CD pipelines. Turning complex systems into elegant,
          automated solutions.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4"
        >
          <a
            href="/Ayush_Singh_Resume.pdf"
            download="Ayush_Singh_Resume.pdf"
            className="flex items-center gap-2 py-2 px-6 text-center text-white cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
          <a
            href="#projects"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            View Projects
          </a>
          <div className="relative group">
              <button
                className="py-2 px-6 text-center text-white cursor-pointer rounded-lg border border-[#7042f88b] hover:border-purple-500 transition-colors"
              >
                Get In Touch
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-52 bg-[#0d0d1a] border border-[#7042f88b] rounded-xl overflow-hidden shadow-lg shadow-purple-900/30 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                <a
                  href="https://www.linkedin.com/in/ayush-singh-b5a7b2257/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#7042f820] hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:thakurayushsingh01@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#7042f820] hover:text-white transition-colors text-sm border-t border-[#7042f830]"
                >
                  <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  Gmail
                </a>
              </div>
            </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative flex items-center justify-center">
          {/* Cyan outer glow */}
          <div className="absolute w-[310px] h-[310px] rounded-full bg-cyan-400/20 blur-2xl" />
          {/* Cyan ring */}
          <div className="relative w-[280px] h-[280px] rounded-full p-[3px] bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_40px_8px_rgba(0,255,220,0.35)]">
            {/* White inner ring */}
            <div className="w-full h-full rounded-full p-[3px] bg-white">
              {/* Dark bg + photo */}
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
                <Image
                  src="/profile.png"
                  alt="Ayush Singh"
                  fill
                  className="object-cover object-top select-none"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
