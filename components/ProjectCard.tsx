import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div>
        <p className="project-card__url">{project.url.replace("https://", "")}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__copy">{project.description}</p>
      </div>

      <ul className="project-card__tech" aria-label="Tecnologias usadas">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <a className="project-card__link" href={project.url} target="_blank" rel="noreferrer">
        Ver proyecto
      </a>
    </article>
  );
}
