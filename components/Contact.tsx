"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Interested in working together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="mailto:gogulanavateja1910@gmail.com"
            className="bg-[#111827] rounded-2xl p-8 flex items-center gap-5 border border-gray-800 hover:border-cyan-400"
          >
            <FaEnvelope className="text-4xl text-cyan-400" />

            <div>
              <h3 className="text-xl font-semibold">Email</h3>

              <p className="text-gray-400">
                gogulanavateja1910@gmail.com
              </p>
            </div>

          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="tel:+919676772106"
            className="bg-[#111827] rounded-2xl p-8 flex items-center gap-5 border border-gray-800 hover:border-cyan-400"
          >
            <FaPhoneAlt className="text-4xl text-cyan-400" />

            <div>
              <h3 className="text-xl font-semibold">Phone</h3>

              <p className="text-gray-400">
                +91 9676772106
              </p>
            </div>

          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="https://linkedin.com/in/gogula-navateja-455589238"
            target="_blank"
            className="bg-[#111827] rounded-2xl p-8 flex items-center gap-5 border border-gray-800 hover:border-cyan-400"
          >
            <FaLinkedin className="text-4xl text-cyan-400" />

            <div>
              <h3 className="text-xl font-semibold">LinkedIn</h3>

              <p className="text-gray-400">
                Connect with me
              </p>
            </div>

          </motion.a>

          {/* <motion.a
            whileHover={{ scale: 1.03 }}
            href="https://github.com/20311a0432"
            target="_blank"
            className="bg-[#111827] rounded-2xl p-8 flex items-center gap-5 border border-gray-800 hover:border-cyan-400"
          >
            <FaGithub className="text-4xl text-cyan-400" />

            <div>
              <h3 className="text-xl font-semibold">GitHub</h3>

              <p className="text-gray-400">
                View My Projects
              </p>
            </div>

          </motion.a> */}

        </div>

        {/* <div className="text-center mt-16">

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl text-lg font-semibold"
          >
            <FaDownload />

            Download Resume

          </a>

        </div> */}

      </div>
    </section>
  );
}