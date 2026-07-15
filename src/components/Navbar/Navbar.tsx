import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Experience", path: "/experience" },
  { title: "Projects", path: "/projects" },
  { title: "Skills", path: "/skills" },
  { title: "Research", path: "/research" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed
top-5
left-1/2
-translate-x-1/2
z-50
w-[92%]
max-w-7xl
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-2xl
shadow-2xl"
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
        >
          <span className="text-blue-500">Sindhu</span>
          <span className="text-white">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`transition font-medium ${
                location.pathname === item.path
                  ? "text-blue-500"
                  : "text-slate-300 hover:text-blue-400"
              }`}
            >
              {item.title}
            </Link>
          ))}

          {/* Resume Button */}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl font-medium"
          >
            <Download size={18} />
            Resume
          </a>

        </nav>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-slate-900 border-t border-slate-800"
        >
          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {item.title}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>
        </motion.div>
      )}
    </motion.header>
  );
}