import { useRouter } from 'next/router';
import { projects } from '../projects';

export default function AllProjects() {
  const router = useRouter();

  return (
    <div className="py-[25vh] px-8 md:px-16 scrollbar-hide">
      <h1 className="text-2xl md:text-3xl font-mono mb-8">
        all projects
      </h1>

      <div className="space-y-6 max-w-2xl">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => router.push(`/projects?id=${project.id}`)}
            className="block text-left w-full group"
          >
            <h2 className="text-base md:text-lg group-hover:underline mb-1">
              {project.title}
            </h2>
            <p className="text-sm text-black/60">
              {project.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
