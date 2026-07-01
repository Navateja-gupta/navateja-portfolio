"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaSalesforce,
  FaDatabase,
  FaJenkins,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGooglecloud,
  SiKubernetes,
  SiTensorflow,
  SiLangchain,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML/CSS", icon: "🌐" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-500" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "SQL Server", icon: <FaDatabase className="text-gray-300" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      //{ name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "Jenkins", icon: <FaJenkins className="text-red-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
  {
    title: "Salesforce",
    skills: [
      { name: "Salesforce Administration", icon: <FaSalesforce className="text-blue-500" /> },
      { name: "Data Loader", icon: "📦" },
      { name: "Validation Rules", icon: "✅" },
      { name: "Workflows", icon: "⚙️" },
      { name: "Reports & Dashboards", icon: "📊" },
    ],
  },
  {
    title: "AI & Data Science",
skills: [
  { name: "Machine Learning", icon: "🧠" },
  { name: "Deep Learning", icon: "📈" },
  //{ name: "LLMs", icon: "💬" },
  { name: "RAG", icon: "🤖" },
  { name: "LangChain", icon: <SiLangchain className="text-green-400" /> },
  { name: "LangGraph", icon: "🔗" },
  //{ name: "Prompt Engineering", icon: "✨" },
  //{ name: "Vector Databases", icon: "🗄️" },
  { name: "Slurm", icon: "🖥️" },
  { name: "NVIDIA GB200/GB300 NVL72", icon: "⚡" },
],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies and tools I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#111827] border border-gray-800 p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="text-xl">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}