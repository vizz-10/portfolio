import { lazy, Suspense } from "react";
import SkipLink from "./components/SkipLink";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const GitHub = lazy(() => import("./components/GitHub"));
const AskPortfolio = lazy(() => import("./components/AskPortfolio"));

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070e]">
      <SkipLink />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Credentials />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <AskPortfolio />
      </Suspense>
    </div>
  );
}
