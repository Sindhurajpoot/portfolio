import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  GitBranch,
  Link2,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mt-2">
  <span className="gradient-text">
    Sindhu
  </span>

  <br />

  <span className="gradient-text">
    Kumari
  </span>
</h1>

          <div className="mt-8 text-3xl lg:text-4xl font-semibold text-gray-200">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Technical Analyst",
                2000,
                "Research Intern @ IIT Delhi",
                2000,
                "Full Stack Developer",
                2000,
                "LLM Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </div>

         <p className="mt-10 text-gray-300 text-xl leading-9 max-w-2xl">
            Building AI-powered products using Machine Learning,
            Full Stack Development, LLMs and Data Analytics to solve
            real-world problems.
          </p>

          {/* Buttons */}

        <div className="flex flex-wrap gap-6 mt-12">

            <a
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl font-semibold"
            >
              View Projects
              <ArrowRight size={20} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-blue-500 hover:bg-blue-600 transition px-7 py-4 rounded-xl"
            >
              <Download size={20} />
              Resume
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/Sindhurajpoot"
              target="_blank"
              className="bg-slate-800 hover:bg-blue-600 p-4 rounded-full transition"
            >
              <GitBranch />
            </a>

            <a
              href="https://www.linkedin.com/in/sindhu-kumari-62a258290/"
              target="_blank"
              className="bg-slate-800 hover:bg-blue-600 p-4 rounded-full transition"
            >
              <Link2 />
            </a>

            <a
              href="mailto:rajpootsindhu2411@gmail.com"
              className="bg-slate-800 hover:bg-blue-600 p-4 rounded-full transition"
            >
              <Mail />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Profile */}

          <div className="relative w-[460px] h-[460px] mx-auto">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-600 blur-3xl opacity-80 animate-pulse"></div>

            <img
              src="/profile.png"
              alt="Sindhu Kumari"
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800"
            />
            <motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{
    repeat: Infinity,
    duration: 5,
  }}
  className="absolute top-10 right-0 glass px-6 py-4 rounded-2xl"
>
  <p className="text-blue-400 font-semibold">
    Technical Analyst
  </p>
</motion.div>
<motion.div
  animate={{ y: [10, -10, 10] }}
  transition={{
    repeat: Infinity,
    duration: 5,
  }}
  className="absolute bottom-10 left-0 glass px-6 py-4 rounded-2xl"
>
  <p className="text-cyan-400 font-semibold">
    AI Researcher
  </p>
</motion.div>
          </div>

          {/* Floating Cards */}

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-5 -left-5 bg-slate-900 p-4 rounded-2xl shadow-xl"
          >
            🤖 AI & ML
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-10 -right-5 bg-slate-900 p-4 rounded-2xl shadow-xl"
          >
            🚀 React + Node
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Stats */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

          {[
            ["8.08", "CGPA"],
            ["15+", "Projects"],
            ["2-3", "Internships"],
            ["Top 0.02%", "Fellowship"],
            ["AI", "Research"],
          ].map(([num, label]) => (

            <div
              key={label}
              className="bg-slate-900 px-8 py-5 rounded-2xl border border-slate-800 text-center"
            >
              <h2 className="text-2xl font-bold text-blue-400">
                {num}
              </h2>

              <p className="text-slate-400 text-sm mt-2">
                {label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}