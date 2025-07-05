
import MainLayout from "../../../components/sections/MainLayout";
import ProjectsList from "../../../components/sections/ProjectsList";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <MainLayout showGithubLink={true}>
      <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[color:var(--heading)] mb-4">Projects</h1>
        </div>
      <ProjectsList projects={projects} />
    </MainLayout>
  );
}