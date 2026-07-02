"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Engineering (B.E.) - Computer Science & Engineering",
    institute: "Matrusri Engineering College",
    duration: "2020 – 2024",
    score: "CGPA: 8.78",
  },
  {
    degree: "Intermediate (MPC)",
    institute: "Sri Chaitanya Junior College",
    duration: "2018 – 2020",
    score: "Percentage: 97.8%",
  },
  {
    degree: "SSC",
    institute: "Dr. KKR Gowtham School",
    duration: "2017 – 2018",
    score: "GPA: 9.7",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#050816] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            <span className="text-cyan-400">Education</span>
          </h2>

          <p className="mt-4 text-gray-400">
            My academic background and achievements.
          </p>
        </motion.div>

        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl border border-gray-800 bg-[#111827] p-8 hover:border-cyan-400 transition"
            >
              <div className="flex items-start gap-5">

                <FaGraduationCap className="text-4xl text-cyan-400 mt-1" />

                <div className="flex-1">

                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {item.institute}
                  </p>

                  <div className="flex flex-wrap gap-6 mt-3 text-gray-400">

                    <span>{item.duration}</span>

                    <span>{item.score}</span>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}