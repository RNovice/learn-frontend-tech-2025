import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import { ThemeToggle } from "./components/ui/theme-toggle";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}

export default App;
