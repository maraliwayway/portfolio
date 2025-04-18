import ProjectCard from '../ui/ProjectCard';

export default function ProjectsList({ projects }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}