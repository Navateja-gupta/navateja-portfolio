"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaSalesforce,
  FaJenkins,
  FaDatabase,
  FaCloud,
  FaPython,
} from "react-icons/fa";

const projects = [
  {
    title: "ConejoCoin Inventory Management System",
    subtitle: "Full Stack Web Application",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
    technologies: [
      "React.js",
      "Django",
      "MySQL",
      "REST API",
      "Barcode Scanner",
      "eBay API",
    ],
    description:
      "Developed a full-stack inventory management application for coin collectors and dealers to efficiently manage inventory, storage locations, sales, and online listings.",

    features: [
      "Built using React.js, Django, and MySQL.",
      "Implemented barcode (NGC) scanning for quick inventory entry.",
      "Created location management for organized storage.",
      "Integrated eBay listing functionality.",
      "Designed dashboards and reports for inventory tracking and sales analytics.",
    ],
  },

  {
    title: "Salesforce Enterprise Data Migration & Workflow Automation",
    subtitle: "Oxford Client Project",
    icon: <FaSalesforce className="text-blue-400 text-5xl" />,
    technologies: [
      "Salesforce",
      "Data Loader",
      "SQL Server",
      "PostgreSQL",
      "Validation Rules",
      "Reports",
    ],
    description:
      "Executed enterprise-scale Salesforce implementation involving migration of recruitment and HR data while automating business workflows.",

    features: [
      "Migrated Companies, HR, Candidates, Applications, and Resume data.",
      "Imported over 50,000 business records using Salesforce Data Loader.",
      "Performed data cleansing, validation, and deduplication.",
      "Created custom objects, workflows, and validation rules.",
      "Developed dashboards and reports for HR and recruitment analytics.",
    ],
  },

  {
    title: "Enterprise Data Migration Automation",
    subtitle: "Blackline Cloud Migration",
    icon: <FaJenkins className="text-red-400 text-5xl" />,
    technologies: [
      "Jenkins",
      "GCP",
      "SQL",
      "Shell",
      "PowerShell",
      "Cloud Storage",
    ],
    description:
      "Automated enterprise data migration pipelines for transferring large-scale datasets from on-premises infrastructure to Google Cloud Platform.",

    features: [
      "Designed reusable Jenkins CI/CD pipelines.",
      "Migrated CSV, JSON, XML and Database dumps.",
      "Automated validation and post-migration verification.",
      "Reduced manual effort by approximately 60%.",
      "Achieved minimal downtime during migration.",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Some of the enterprise applications and solutions I have built.
          </p>
        </motion.div>

        <div className="space-y-12">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
              }}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-10 shadow-xl"
            >

              <div className="flex flex-col lg:flex-row gap-10">

                <div className="lg:w-1/6 flex justify-center items-center">

                  {project.icon}

                </div>

                <div className="lg:w-5/6">

                  <h3 className="text-3xl font-bold">

                    {project.title}

                  </h3>

                  <p className="text-cyan-400 mt-2">

                    {project.subtitle}

                  </p>

                  <p className="text-gray-400 leading-8 mt-5">

                    {project.description}

                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-cyan-500/10 border border-cyan-500 px-3 py-1 text-sm text-cyan-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <ul className="mt-8 space-y-3 text-gray-300">

                    {project.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex gap-3"
                      >
                        <span className="text-green-400">✔</span>

                        <span>{feature}</span>

                      </li>

                    ))}

                  </ul>

             

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}