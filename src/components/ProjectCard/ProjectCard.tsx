import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import Tilt from "react-parallax-tilt";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  featured: boolean;
  tech: string[];
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1200}
      scale={1.02}
      transitionSpeed={1800}
      glareEnable
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
    >
      <motion.div
        whileHover={{
          y: -12,
          scale: 1.01,
          boxShadow: "0px 20px 60px rgba(37,99,235,.25)",
        }}
        transition={{ duration: 0.35 }}
        className={`
          glass
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          ${
            project.featured
              ? "lg:grid lg:grid-cols-2"
              : ""
          }
        `}
      >
        {/* Image Section */}

        <div className="relative overflow-hidden">

          {/* Browser Frame */}

          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900/90 backdrop-blur-md flex items-center px-4 gap-2 z-20">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

          </div>

          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{
              scale: 1.08,
              rotate: 1,
            }}
            transition={{ duration: 0.5 }}
            className={`
              w-full
              object-cover
              pt-10
              ${
                project.featured
                  ? "min-h-[430px]"
                  : "h-72"
              }
            `}
          />

          {/* Gradient Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

          {project.featured && (
            <div className="absolute top-14 left-5 z-30">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⭐ Featured
              </span>
            </div>
          )}

        </div>

        {/* Content */}

        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-4xl font-black gradient-text">
            {project.title}
          </h2>

          <p className="mt-6 text-gray-300 leading-8 tracking-wide">
            {project.description}
          </p>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-3 mt-8">

            {project.tech.map((tech) => (

              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                className="glass px-4 py-2 rounded-full text-sm text-cyan-300 border border-cyan-400/20"
              >
                {tech}
              </motion.span>

            ))}

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-lg"
            >
              <GitBranch size={18} />
              GitHub
            </motion.a>

            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="glass border border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold hover:border-cyan-400 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>

          </div>

        </div>

      </motion.div>
    </Tilt>
  );
}