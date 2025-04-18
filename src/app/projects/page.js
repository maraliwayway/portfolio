
import MainLayout from "../../../components/sections/MainLayout";
import ProjectsList from "../../../components/sections/ProjectsList";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <MainLayout showGithubLink={true}>
      <ProjectsList projects={projects} />
    </MainLayout>
  );
}