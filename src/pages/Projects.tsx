import { motion } from "framer-motion";
import PageLayout from "../layouts/PageLayout";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projects } from "../data/projects";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
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

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <PageLayout>
      <section className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[4px] text-blue-400 font-semibold"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-6xl font-extrabold mt-6 leading-tight"
        >
          Featured
          <span className="text-blue-500"> Projects.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-10 text-slate-400 text-xl leading-9 max-w-4xl"
        >
          A collection of AI, Machine Learning, Full Stack Development,
          Product Engineering, Research, and scalable software solutions
          built to solve real-world problems.
        </motion.p>

        {/* Featured Project */}

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .6 }}
            className="mt-24"
          >
            <ProjectCard project={featured} />
          </motion.div>
        )}

        {/* Divider */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .8 }}
          className="mt-28 mb-6 text-5xl font-extrabold leading-tight"
        >
          More
          <span className="text-blue-500"> Projects.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-slate-400 text-xl leading-9 max-w-4xl mb-14"
        >
          Explore additional AI applications, dashboards,
          research prototypes and full-stack projects.
        </motion.p>

        {/* Project Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-2"
        >
          {others.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              whileHover={{
                y: -10,
                boxShadow:
                  "0px 0px 45px rgba(37,99,235,.35)",
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </section>
    </PageLayout>
  );
}