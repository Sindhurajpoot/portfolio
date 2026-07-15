import { motion } from "framer-motion";
import PageLayout from "../layouts/PageLayout";
import { skillCategories } from "../data/skills";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Skills() {
  return (
    <PageLayout>
      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            MY EXPERTISE
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4 gradient-text">
            Skills & Technologies
          </h1>

          <p className="mt-8 text-gray-300 leading-8 tracking-wide text-lg max-w-3xl">
            Technologies and tools I use to design scalable AI systems,
            build modern web applications, and solve real-world engineering
            problems.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 mt-20"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                y: -10,
                boxShadow: "0px 0px 45px rgba(37,99,235,.35)",
              }}
              transition={{
                duration: 0.35,
              }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold mb-10">
                {category.title}
              </h2>

              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-8">

                  <div className="flex justify-between items-center mb-3">

                    <span className="text-lg font-medium">
                      {skill.name}
                    </span>

                    <span className="text-blue-400 font-semibold">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
                    />

                  </div>

                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>

      </section>
    </PageLayout>
  );
}