import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import { ThemeToggle } from "./components/ui/theme-toggle"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  )
}

export default App
