"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCertificate,
  FaCloud,
  FaBrain,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Get to know more about my experience and passion.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl bg-[#111827] border border-gray-800 p-10 shadow-xl">

              <h3 className="text-3xl font-bold mb-6 text-white">
                Software Developer
              </h3>

              <p className="text-gray-300 leading-8">

                I'm a Software Developer with <b>2 years of experience</b>
                 building enterprise applications, Salesforce solutions,
                cloud-based migration pipelines and full-stack web
                applications.

              </p>

              <br />

              <p className="text-gray-300 leading-8">

                My work includes developing scalable applications using
                React.js, Django and .NET, automating enterprise workflows
                using Jenkins, migrating large datasets to Google Cloud
                Platform and Salesforce, and designing efficient
                data-driven solutions.

              </p>

              <br />

              <p className="text-gray-300 leading-8">

                Apart from software development, I have a strong interest in Generative AI and modern AI systems. I continuously build my expertise in Large Language Models (LLMs), RAG, LangChain, LangGraph, and next-generation AI infrastructure, including NVIDIA GB200 and GB300 NVL72 systems, enabling me to develop intelligent, scalable, and enterprise-ready AI solutions.
              </p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-[#111827] p-8 text-center border border-gray-800 hover:border-cyan-400 transition">

                <FaBriefcase
                  className="mx-auto text-cyan-400 text-4xl mb-4"
                />

                <h2 className="text-4xl font-bold">
                  2+
                </h2>

                <p className="text-gray-400 mt-2">
                  Years Experience
                </p>

              </div>

              <div className="rounded-2xl bg-[#111827] p-8 text-center border border-gray-800 hover:border-cyan-400 transition">

                <FaCertificate
                  className="mx-auto text-cyan-400 text-4xl mb-4"
                />

                <h2 className="text-4xl font-bold">
                  6+
                </h2>

                <p className="text-gray-400 mt-2">
                  Certifications
                </p>

              </div>

              <div className="rounded-2xl bg-[#111827] p-8 text-center border border-gray-800 hover:border-cyan-400 transition">

                <FaCloud
                  className="mx-auto text-cyan-400 text-4xl mb-4"
                />

                <h2 className="text-4xl font-bold">
                  3+
                </h2>

                <p className="text-gray-400 mt-2">
                  Enterprise Projects
                </p>

              </div>

              <div className="rounded-2xl bg-[#111827] p-8 text-center border border-gray-800 hover:border-cyan-400 transition">

                <FaBrain
                  className="mx-auto text-cyan-400 text-4xl mb-4"
                />

                <h2 className="text-4xl font-bold">
                  AI
                </h2>

                <p className="text-gray-400 mt-2">
                  RAG · LangChain · LangGraph
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}