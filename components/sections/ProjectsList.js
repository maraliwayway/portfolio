import ProjectCard from '../ui/ProjectCard';

export default function ProjectsList({ projects }) {
  return (
    <section>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}