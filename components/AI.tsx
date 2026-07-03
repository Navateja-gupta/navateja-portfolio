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

        {/* Publications */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mt-6"
>
  <div className="rounded-3xl bg-[#111827] border border-gray-800 p-10">

    <div className="flex items-center gap-4 mb-8">
      <FaBookOpen className="text-4xl text-green-400" />
      <h3 className="text-3xl font-bold">
        Research Publications
      </h3>
    </div>

    {/* Publication 1 */}

    <div className="border-l-4 border-cyan-400 pl-6 mb-10">

      <h4 className="text-2xl font-semibold text-cyan-400">
        COAQNN-Based Real-Time NIFTY-50 Stock Price Prediction Using
        Financial Indicators and Sentiment Analysis
      </h4>

      <p className="text-gray-300 mt-3">
        Published in the{" "}
        <strong>
          International Scientific Journal of Engineering and Management
          (ISJEM)
        </strong>
      </p>

      <p className="text-gray-400 mt-3">
        Developed a hybrid stock prediction framework integrating
        <strong> Coati Optimization Algorithm (COA)</strong>,
        <strong> Quantum Neural Networks (QNN)</strong>,
        technical indicators, and financial news sentiment analysis to
        improve real-time prediction accuracy for NIFTY-50 stocks.
      </p>

      <p className="text-gray-400 mt-3">
        <strong>Authors:</strong> Navateja G, Dr. Kiran B M
      </p>

      <p className="text-gray-500 mt-2">
        2026 • ISSN: 2583-6129
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="/papers/COAQNN_NIFTY50_Prediction.pdf"
          download
          className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold hover:bg-cyan-600 transition"
        >
          📄 Download Paper
        </a>

        <a
          href="/papers/COAQNN_NIFTY50_Prediction.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-cyan-500 px-5 py-3 font-semibold hover:bg-cyan-500/10 transition"
        >
          🔗 View Paper
        </a>

      </div>

    </div>

    {/* Publication 2 */}

    <div className="border-l-4 border-cyan-400 pl-6">

      <h4 className="text-2xl font-semibold text-cyan-400">
        Rice Leaf Disease Detection Using Convolutional Neural Network
      </h4>

      <p className="text-gray-300 mt-3">
        Published in the{" "}
        <strong>
          International Journal of Analytical and Experimental Modal Analysis
          (IJAEMA)
        </strong>
      </p>

      <p className="text-gray-400 mt-3">
        Proposed a Convolutional Neural Network (CNN)-based model for
        automated rice leaf disease detection, enabling early diagnosis and
        improved crop health monitoring through image classification.
      </p>

      <p className="text-gray-400 mt-3">
        <strong>Authors:</strong> Gogula Navateja, Dr. Raghavendar Raju L
      </p>

      <p className="text-gray-500 mt-2">
        November 2023 • ISSN NO: 0886-9367
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="/papers/Rice_Leaf_Disease_Detection_CNN.pdf"
          download
          className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold hover:bg-green-600 transition"
        >
          📄 Download Paper
        </a>

        <a
          href="/papers/Rice_Leaf_Disease_Detection_CNN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-cyan-500 px-5 py-3 font-semibold hover:bg-green-500/10 transition"
        >
          🔗 View Paper
        </a>

      </div>

    </div>

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