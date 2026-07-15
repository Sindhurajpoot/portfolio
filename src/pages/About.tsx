import { motion } from "framer-motion";
import PageLayout from "../layouts/PageLayout";

const stats = [
  {
    number: "8.08",
    label: "CGPA",
  },
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "2",
    label: "Research Internships",
  },
  {
    number: "Top 0.02%",
    label: "AlgoUniversity Fellow",
  },
];

export default function About() {
  return (
    <PageLayout>
      <section className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[4px] text-blue-400 font-semibold"
        >
          About Me
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-6xl font-extrabold mt-6 leading-tight"
        >
          Turning Ideas into
          <span className="text-blue-500"> AI Products.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-10 text-slate-400 text-xl leading-9 max-w-4xl"
        >
          I'm Sindhu Kumari, an Artificial Intelligence & Machine Learning
          undergraduate passionate about building AI-driven products that solve
          real-world problems.

          During my internship at IIT Delhi, I worked on India's first Adivasi
          speech translation platform using Large Language Models, Prompt
          Engineering and Hugging Face Transformers.

          I enjoy combining AI, software engineering and product thinking to
          create scalable applications with measurable impact.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .2,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="glass rounded-2xl p-8 border border-white/10 card-hover"
            >

              <h2 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h2>

              <p className="mt-4 text-slate-400">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>
    </PageLayout>
  );
}