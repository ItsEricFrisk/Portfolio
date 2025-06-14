import { useScrollToTop } from "./hooks/useScrollToTop";
import ProjectCards from "./components/ProjectCards";
import TechStack from "./components/TechStack";
import JobExperienceList from "./components/experience/JobExperienceList";
import Contact from "./components/Contact";
import Info from "./components/Info";

function App() {
  useScrollToTop();

  return (
    <main className="w-screen min-h-screen px-10 flex flex-col items-center bg-light text-dark">
      <div className="md:w-2/5 flex flex-col items-start justify-center gap-y-12 mt-24">
        <Info />
        <JobExperienceList />
        <TechStack />
        <ProjectCards />
        <Contact />
      </div>
    </main>
  );
}

export default App;
