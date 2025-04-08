import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import { useScrollToTop } from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();
  return (
    <main className="w-screen px-10 flex flex-col items-center justify-center bg-light text-dark">
      <About />
      <TechStack />
      <ProjectCards />
      <Contact />
    </main>
  );
}

export default App
