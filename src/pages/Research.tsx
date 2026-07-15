import PageLayout from "../layouts/PageLayout";
import { experiences, certifications } from "../data/research";
import { motion } from "framer-motion";
import { Award, FlaskConical } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Research() {
  return (
    <PageLayout>
      <section className="section">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            Academic Journey
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4 gradient-text">
            Research & Achievements
          </h1>

          <p className="mt-6 text-gray-300 leading-8 tracking-wide max-w-3xl text-lg">
            My journey in AI research, fellowships, certifications,
            and contributions toward solving real-world problems
            through Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        {/* Research Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-20 space-y-8"
        >
          {experiences.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow:
                  "0px 0px 45px rgba(37,99,235,.35)",
              }}
              transition={{ duration: 0.35 }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-start gap-6">

                <div className="bg-blue-600 p-4 rounded-2xl glow-blue">
                  <FlaskConical size={28} />
                </div>

                <div className="flex-1">

                  <h2 className="text-3xl font-bold">
                    {itemData.title}
                  </h2>

                  <p className="text-blue-400 mt-2">
                    {itemData.organization}
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    {itemData.period}
                  </p>

                  <p className="mt-6 text-gray-300 leading-8 tracking-wide">
                    {itemData.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {itemData.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.08 }}
                        className="glass px-4 py-2 rounded-full text-sm text-cyan-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}

        <div className="mt-28">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold flex items-center gap-3"
          >
            <Award className="text-yellow-400" />
            Certifications
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert}
                variants={item}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0px 0px 35px rgba(37,99,235,.35)",
                }}
                className="glass rounded-2xl p-6 card-hover"
              >
                {cert}
              </motion.div>
            ))}
          </motion.div>

        </div>

      </section>
    </PageLayout>
  );
}