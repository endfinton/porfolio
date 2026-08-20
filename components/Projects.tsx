import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container projects__inner">
        <div className="section-heading">
          <h2>Proyectos propios</h2>
          <p>Dos aplicaciones reales creadas y desplegadas por mi.</p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
