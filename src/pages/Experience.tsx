import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import PageLayout from "../layouts/PageLayout";

const experiences = [
  {
    company: "IIT Delhi",
    role: "Research Intern",
    period: "June 2025 – September 2025",
    description:
      "Worked on Adi-Vaani, India's first Adivasi speech translation application using Large Language Models, Hugging Face Transformers, Prompt Engineering, Python, SQL, and Label Studio. Contributed to multilingual speech processing and AI-driven language technologies."
  },
  {
    company: "Mechatron Technologies",
    role: "Data Entry & Lead Generation Intern",
    period: "June 2025 – September 2025",
    description:
      "Managed structured datasets, optimized Excel-based lead tracking, generated business leads, and improved reporting workflows through data cleaning and analytical dashboards."
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Experience() {
  return (
    <PageLayout>
      <section className="section">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Experience
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-5">
            Professional Journey
          </h2>

          <p className="text-gray-300 leading-8 tracking-wide max-w-3xl mx-auto mt-8">
            My professional experience includes AI research,
            full-stack development, data analytics,
            and product-focused engineering.
          </p>

        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-24"
        >

          {/* Timeline Line */}

          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-cyan-500 to-violet-500 rounded-full" />

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0px 0px 45px rgba(37,99,235,.35)"
              }}
              className="relative pl-24 pb-16"
            >

              {/* Timeline Dot */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute left-0 top-3 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl"
              >

                <Briefcase size={20} />

              </motion.div>

              {/* Card */}

              <div className="glass rounded-3xl p-8 card-hover">

                <span className="text-blue-400 font-semibold">
                  {exp.period}
                </span>

                <h3 className="text-3xl font-bold mt-3">
                  {exp.role}
                </h3>

                <h4 className="text-cyan-300 mt-2 text-lg">
                  {exp.company}
                </h4>

                <p className="text-gray-300 leading-8 tracking-wide mt-6">
                  {exp.description}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </section>
    </PageLayout>
  );
}