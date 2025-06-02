import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import { ThemeToggle } from "./components/ui/theme-toggle";
import TechStack from "./components/sections/TechStack"
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}

export default App;
