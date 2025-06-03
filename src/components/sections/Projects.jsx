import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ui/ProjectCard";
import { caseStudies } from "../../data/caseStudies.js";

export const Projects = () => {
  const featuredProjects = caseStudies.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 text-[var(--color-text)]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary-bright)] text-center">
            Featured Projects:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
