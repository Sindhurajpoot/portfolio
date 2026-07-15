import { GitBranch, Link, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-5xl font-bold text-center"
        >
          Let's Build Something Amazing.
        </motion.h2>

        <p className="text-center text-gray-300 leading-8 tracking-wide mt-6">
          Open to AI Engineering, Product Technical Analyst,
          and Full Stack opportunities.
        </p>

        <div className="flex justify-center gap-8 mt-12">

          <motion.a
            whileHover={{scale:1.15,y:-5}}
            href="mailto:rajpootsindhu2411@gmail.com"
            className="glass p-4 rounded-full"
          >
            <Mail size={22}/>
          </motion.a>

          <motion.a
            whileHover={{scale:1.15,y:-5}}
            href="https://github.com/Sindhurajpoot"
            target="_blank"
            rel="noreferrer"
            className="glass p-4 rounded-full"
          >
            <GitBranch size={22}/>
          </motion.a>

          <motion.a
            whileHover={{scale:1.15,y:-5}}
            href="https://linkedin.com/in/sindhu-kumari-62a258290"
            target="_blank"
            rel="noreferrer"
            className="glass p-4 rounded-full"
          >
            <Link size={22}/>
          </motion.a>

          <motion.a
            whileHover={{scale:1.15,y:-5}}
            href="/resume.pdf"
            download
            className="glass p-4 rounded-full"
          >
            <Download size={22}/>
          </motion.a>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-400">
          © 2026 Sindhu Kumari • Built with React, TypeScript & Tailwind CSS
        </div>

      </div>

    </footer>
  );
}