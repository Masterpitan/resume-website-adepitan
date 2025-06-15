import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
