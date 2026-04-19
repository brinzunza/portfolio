import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { blogPosts } from '../data/blogPosts';

interface SidebarProps {
  projects?: Array<{ id: string; title: string }>;
  onMobileClose?: () => void;
}

export default function Sidebar({ projects = [], onMobileClose }: SidebarProps) {
  const router = useRouter();
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [writingExpanded, setWritingExpanded] = useState(false);

  // Automatically expand sections based on current route
  useEffect(() => {
    if (router.pathname === '/projects' || router.pathname === '/projects/all') {
      setProjectsExpanded(true);
    } else if (router.pathname === '/blog' || router.pathname === '/blog/all') {
      setWritingExpanded(true);
    }
  }, [router.pathname]);

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const isProjectActive = (id: string) => {
    return router.pathname === '/projects' && router.query.id === id;
  };

  const isBlogActive = (id: string) => {
    return router.pathname === '/blog' && router.query.id === id;
  };

  const handleNavClick = () => {
    if (onMobileClose) onMobileClose();
  };

  const visibleProjects = projects.slice(0, 5);
  const visiblePosts = blogPosts.slice(0, 5);

  return (
    <nav className="p-8 md:p-12 h-full overflow-y-auto scrollbar-hide flex justify-end">
      <ul className="space-y-1 text-right mt-[calc(25vh-3rem)]">
        <li>
          <Link
            href="/"
            onClick={handleNavClick}
            className={`block py-2 transition-all ${
              isActive('/') ? 'text-black' : 'text-black/40 hover:text-black'
            }`}
          >
            home
          </Link>
        </li>

        {/* Projects with subsections */}
        <li>
          <div>
            <button
              onClick={() => {
                const isInProjectsSection = router.pathname === '/projects';

                if (isInProjectsSection && projectsExpanded) {
                  // Case 1: In section and open -> just close
                  setProjectsExpanded(false);
                } else {
                  // Cases 2, 3, 4: Navigate to overview and ensure expanded
                  setProjectsExpanded(true);
                  router.push('/projects?id=9999');
                }
              }}
              className={`block py-2 transition-all text-right w-full ${
                isActive('/projects') ? 'text-black' : 'text-black/40 hover:text-black'
              }`}
            >
              projects
            </button>
            {projectsExpanded && projects.length > 0 && (
              <ul className="mr-4 mt-1 space-y-1">
                {visibleProjects.map((project) => (
                  <li key={project.id}>
                    <Link
                      href={`/projects?id=${project.id}`}
                      onClick={handleNavClick}
                      className={`block py-1 text-sm transition-all ${
                        isProjectActive(project.id)
                          ? 'text-black'
                          : 'text-black/30 hover:text-black'
                      }`}
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
                {projects.length > 5 && (
                  <li>
                    <Link
                      href="/projects/all"
                      onClick={handleNavClick}
                      className="block py-1 text-sm font-bold underline transition-all text-black/30 hover:text-black"
                    >
                      see more...
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </div>
        </li>

        {/* Writing with subsections */}
        <li>
          <div>
            <button
              onClick={() => {
                const isInBlogSection = router.pathname === '/blog';

                if (isInBlogSection && writingExpanded) {
                  // Case 1: In section and open -> just close
                  setWritingExpanded(false);
                } else {
                  // Cases 2, 3, 4: Navigate to overview and ensure expanded
                  setWritingExpanded(true);
                  router.push('/blog?id=9999');
                }
              }}
              className={`block py-2 transition-all text-right w-full ${
                isActive('/blog') ? 'text-black' : 'text-black/40 hover:text-black'
              }`}
            >
              writing
            </button>
            {writingExpanded && (
              <ul className="mr-4 mt-1 space-y-1">
                {visiblePosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/blog?id=${post.id}`}
                      onClick={handleNavClick}
                      className={`block py-1 text-sm transition-all ${
                        isBlogActive(post.id)
                          ? 'text-black'
                          : 'text-black/30 hover:text-black'
                      }`}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
                {blogPosts.length > 5 && (
                  <li>
                    <Link
                      href="/blog/all"
                      onClick={handleNavClick}
                      className="block py-1 text-sm font-bold underline transition-all text-black/30 hover:text-black"
                    >
                      see more...
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
