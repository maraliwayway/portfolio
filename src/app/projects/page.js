
import MainLayout from "../../../components/sections/MainLayout";
import ProjectsList from "../../../components/sections/ProjectsList";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <MainLayout showGithubLink={true}>
      <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[color:var(--heading)] mb-4">Projects</h1>
          <p className="text-lg text-[color:var(--foreground)] max-w-2xl mx-auto">
          A showcase of the Web Dev and AI/ML projects I’ve built to solve real-world problems and experiment with new technologies
          </p>
        </div>
      <ProjectsList projects={projects} />
    </MainLayout>
  );
}