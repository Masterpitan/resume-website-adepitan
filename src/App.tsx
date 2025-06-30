import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}

export default App;
