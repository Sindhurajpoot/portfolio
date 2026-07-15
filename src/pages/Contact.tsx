import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  GitBranch,
  Link,
  Download,
} from "lucide-react";
import PageLayout from "../layouts/PageLayout";

const cardVariant = {
  whileHover: {
    y: -8,
    boxShadow: "0px 0px 40px rgba(37,99,235,.30)",
  },
};

export default function Contact() {
  return (
    <PageLayout>
      <section className="section">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mt-4">
            <span className="gradient-text">
              Let's Work Together
            </span>
          </h1>

          <p className="text-gray-300 leading-8 tracking-wide text-xl mt-8 max-w-3xl">
            I'm actively looking for opportunities in AI Engineering,
            Full Stack Development, and Product Technical Analyst roles.
            If you have an exciting opportunity, let's connect.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <div className="space-y-6">

            <motion.div
              {...cardVariant}
              transition={{ duration: .3 }}
              className="glass card-hover rounded-3xl p-6 flex gap-5"
            >
              <Mail className="text-blue-500 mt-1" />

              <div>
                <h3 className="font-semibold text-xl">
                  Email
                </h3>

                <p className="text-gray-300 leading-8">
                  rajpootsindhu2411@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              {...cardVariant}
              transition={{ duration: .3 }}
              className="glass card-hover rounded-3xl p-6 flex gap-5"
            >
              <GitBranch className="text-blue-500 mt-1" />

              <div>
                <h3 className="font-semibold text-xl">
                  GitHub
                </h3>

                <a
                  href="https://github.com/Sindhurajpoot"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-cyan-400 transition"
                >
                  github.com/Sindhurajpoot
                </a>
              </div>
            </motion.div>

            <motion.div
              {...cardVariant}
              transition={{ duration: .3 }}
              className="glass card-hover rounded-3xl p-6 flex gap-5"
            >
              <Link className="text-blue-500 mt-1" />

              <div>
                <h3 className="font-semibold text-xl">
                  LinkedIn
                </h3>

                <a
                  href="https://linkedin.com/in/sindhu-kumari-62a258290"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-cyan-400 transition"
                >
                  View Profile
                </a>
              </div>
            </motion.div>

            <motion.div
              {...cardVariant}
              transition={{ duration: .3 }}
              className="glass card-hover rounded-3xl p-6 flex gap-5"
            >
              <MapPin className="text-blue-500 mt-1" />

              <div>
                <h3 className="font-semibold text-xl">
                  Location
                </h3>

                <p className="text-gray-300">
                  Rajasthan, India
                </p>
              </div>
            </motion.div>

            {/* Resume */}

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transition"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

          </div>

          {/* Right */}

          <motion.form
            whileHover={{
              y: -8,
              boxShadow: "0px 0px 40px rgba(37,99,235,.25)",
            }}
            className="glass rounded-3xl p-8 space-y-6"
          >

            <input
              placeholder="Your Name"
              className="w-full rounded-xl bg-slate-800/70 border border-slate-700 p-4 outline-none focus:border-blue-500 transition"
            />

            <input
              placeholder="Your Email"
              className="w-full rounded-xl bg-slate-800/70 border border-slate-700 p-4 outline-none focus:border-blue-500 transition"
            />

            <input
              placeholder="Subject"
              className="w-full rounded-xl bg-slate-800/70 border border-slate-700 p-4 outline-none focus:border-blue-500 transition"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl bg-slate-800/70 border border-slate-700 p-4 outline-none focus:border-blue-500 transition resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .96 }}
              className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-4 text-lg font-semibold transition"
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>

      </section>
    </PageLayout>
  );
}