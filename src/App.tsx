import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import Socials from "./components/Socials/Socials";

function App() {


  return (
    <main className="w-screen flex flex-col bg-neutral-900 text-white">
      <Hero />
      <About /> 
      <Stack />
      <Projects />
      <Socials />
    </main>
  )
}

export default App
