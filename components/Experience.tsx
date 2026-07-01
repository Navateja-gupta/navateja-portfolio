"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaReact,
  FaSalesforce,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
import { SiJenkins, SiGooglecloud, SiDotnet } from "react-icons/si";

const experiences = [
  {
    company: "Aner Info Technologies",
    role: "Associate Software Developer",
    duration: "2024 – Present",
    color: "border-cyan-500",
    technologies: [
      "React.js",
      ".NET",
      "SQL Server",
      "Jenkins",
      "GCP",
    ],
    achievements: [
      "Developed scalable enterprise applications using React.js, .NET, and SQL Server.",
      "Improved application performance by approximately 25% through code optimization.",
      "Led enterprise data migration from on-premises infrastructure to Google Cloud Platform.",
      "Automated migration workflows using Jenkins, SQL, and scripting, reducing manual effort by 60%.",
      "Worked closely with cross-functional teams to deploy production-ready solutions.",
    ],
    icons: [
      <FaReact key="1" />,
      <SiDotnet key="2" />,
      <FaDatabase key="3" />,
      <SiJenkins key="4" />,
      <SiGooglecloud key="5" />,
    ],
  },
  {
    company: "Aner Info Technologies",
    role: "Salesforce Administrator",
    duration: "Aug 2024 – Sep 2025",
    color: "border-blue-500",
    technologies: [
      "Salesforce",
      "Data Loader",
      "Reports",
      "Dashboards",
      "Validation Rules",
    ],
    achievements: [
      "Implemented custom objects, workflows, approval processes, and validation rules.",
      "Migrated 50,000+ business records from SQL Server and PostgreSQL into Salesforce using Data Loader.",
      "Managed HR, Company, Candidate, Job Application, and Resume data migration.",
      "Built dashboards and reports to provide business insights.",
      "Configured profiles, roles, sharing rules, and field-level security.",
    ],
    icons: [
      <FaSalesforce key="1" />,
      <FaDatabase key="2" />,
    ],
  },
  {
    company: "Research Centre Imarat (DRDO)",
    role: "Software Engineer Intern",
    duration: "Mar 2023 – Aug 2023",
    color: "border-purple-500",
    technologies: [
      "Python",
      "Algorithms",
      "Geometry",
      "Testing",
    ],
    achievements: [
      "Implemented algorithms for intersection points and vertex ordering.",
      "Developed Ray Casting algorithms for convex polygons.",
      "Performed extensive testing and debugging.",
      "Improved computational accuracy and optimized execution.",
    ],
    icons: [
      <FaBriefcase key="1" />,
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Building enterprise applications, cloud solutions, and Salesforce platforms.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-cyan-500 ml-4">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-14 ml-10"
            >
              <span
                className={`absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500`}
              />

              <div
                className={`rounded-2xl border ${exp.color} bg-[#111827] p-8 shadow-lg`}
              >
                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {exp.company}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {exp.duration}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/10 border border-cyan-500 px-3 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 text-gray-300">

                  {exp.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-400 mt-1">✔</span>

                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

                <div className="flex gap-4 mt-8 text-2xl text-cyan-400">

                  {exp.icons}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}