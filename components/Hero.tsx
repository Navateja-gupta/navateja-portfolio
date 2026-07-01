"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1024] to-[#111827]" />

      {/* Glow Effects */}
      <div className="absolute left-10 top-10 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-10 bottom-10 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold md:text-7xl"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Gogula Navateja
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-semibold text-gray-300 md:text-4xl"
        >
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Salesforce Administrator",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Software Developer with <span className="text-white">2 years</span> of
experience building enterprise applications, automating cloud data
migration, developing Salesforce solutions, and leveraging{" "}
<span className="text-cyan-400">
  RAG, LangChain, LangGraph, AI, and Cloud Technologies
</span>{" "}
to build intelligent, scalable applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/gogula-navateja-455589238"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-500 px-7 py-3 transition hover:bg-blue-500/10"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* <a
            href="https://github.com/20311a0432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-gray-600 px-7 py-3 transition hover:bg-gray-800"
          >
            <FaGithub />
            GitHub
          </a> */}
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8"
      >
        <FaChevronDown className="text-3xl text-cyan-400" />
      </motion.div>
    </section>
  );
}