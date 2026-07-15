import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Cursor from "./components/Cursor/Cursor";
import Aurora from "./components/Background/Aurora";

function AnimatedRoutes() {
  const location = useLocation();

  const [loading,setLoading]=useState(true);

useEffect(()=>{

const timer=setTimeout(()=>{

setLoading(false);

},2200);

return()=>clearTimeout(timer)

},[])

if(loading){

return <Loader/>

}

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (

    <BrowserRouter>
    <Aurora />
    <Cursor />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}