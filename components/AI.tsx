"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaCloud,
  FaCertificate,
  FaBookOpen,
} from "react-icons/fa";

const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "Microsoft Certified: Azure AI Fundamentals",
  "Programming in Java - NPTEL",
  "Python for Data Science - NPTEL",
  "Front End Development - Coding Ninjas",
];

const aiSkills = [
  "Large Language Models (LLMs)",
  "Retrieval-Augmented Generation (RAG)",
  "LangChain",
  "LangGraph",
  "Prompt Engineering",
  "Vector Databases",
  "AI Agents",
  "NVIDIA GB200 NVL72",
  "NVIDIA GB300 NVL72",
  "Slurm Workload Manager",
];

export default function AI() {
  return (
    <section
      id="ai"
      className="bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            AI, Certifications & <span className="text-cyan-400">Research</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Continuous learning and research in Artificial Intelligence, Cloud
            Computing, and Enterprise Technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* AI */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-[#111827] border border-gray-800 p-8"
          >

            <div className="flex items-center gap-4 mb-8">
              <FaRobot className="text-4xl text-cyan-400" />
              <h3 className="text-3xl font-bold">
                AI & LLM Expertise
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">

              {aiSkills.map((item) => (

                <div
                  key={item}
                  className="rounded-xl bg-[#1f2937] p-3 text-center text-gray-300 hover:bg-cyan-500/20 transition"
                >
                  {item}
                </div>

              ))}

            </div>

          </motion.div>

          {/* Certifications */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-[#111827] border border-gray-800 p-8"
          >

            <div className="flex items-center gap-4 mb-8">
              <FaCertificate className="text-4xl text-yellow-400" />
              <h3 className="text-3xl font-bold">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">

              {certifications.map((cert) => (

                <div
                  key={cert}
                  className="rounded-xl bg-[#1f2937] p-4 border-l-4 border-cyan-400"
                >
                  {cert}
                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Publication */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6"
        >

          <div className="rounded-3xl bg-[#111827] border border-gray-800 p-10">

            <div className="flex items-center gap-4 mb-6">

              <FaBookOpen className="text-4xl text-green-400" />

              <h3 className="text-3xl font-bold mt-6">
                Research Publication
              </h3>

            </div>

            <h4 className="text-2xl font-semibold text-cyan-400">

              Rice Leaf Disease Detection Using Convolutional Neural Network

            </h4>

            <p className="text-gray-300 mt-4">

              Published in the <strong>
              International Journal of Analytical and Experimental Modal Analysis (IJAEMA)
              </strong>

            </p>

            <p className="text-gray-400 mt-3">

              Authors:
              Dr. Raghavendar Raju L,
              Gogula Navateja

            </p>

            <p className="text-gray-500 mt-2">

              November 2023

            </p>

          </div>

        </motion.div>

        {/* Statistics */}

        {/* <div className="grid md:grid-cols-4 gap-6 mt-14">

          <div className="rounded-2xl bg-[#111827] p-8 text-center">
            <FaBrain className="mx-auto text-4xl text-cyan-400 mb-3" />
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-400">AI Technologies</p>
          </div>

          <div className="rounded-2xl bg-[#111827] p-8 text-center">
            <FaCertificate className="mx-auto text-4xl text-yellow-400 mb-3" />
            <h3 className="text-4xl font-bold">6+</h3>
            <p className="text-gray-400">Certifications</p>
          </div>

          <div className="rounded-2xl bg-[#111827] p-8 text-center">
            <FaCloud className="mx-auto text-4xl text-blue-400 mb-3" />
            <h3 className="text-4xl font-bold">3+</h3>
            <p className="text-gray-400">Cloud Platforms</p>
          </div>

          <div className="rounded-2xl bg-[#111827] p-8 text-center">
            <FaBookOpen className="mx-auto text-4xl text-green-400 mb-3" />
            <h3 className="text-4xl font-bold">1</h3>
            <p className="text-gray-400">Research Paper</p>
          </div>

        </div> */}

      </div>
    </section>
  );
}