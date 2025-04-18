import Image from "next/image"
export default function Projects() {

    const projects = [
      {
        tags: ["Next.js", "Tailwind CSS", "JavaScript", "Affinda API", "OpenAI API", "UI/UX", "Figma", "Agile Environment"],
        title: "ReZoomé",
        description:
          "AI-powered mock interview and resume review platform with real-time practice and feedback tailored to your target job",
        image: "/rezoome.png",
        moreInfoLink: "",
        githubLink: "https://github.com/CMPT-276-SPRING-2025/final-project-01-sky",
      },
      {
        tags: ["JavaScript", "HTML", "CSS", "TMDb API", "Teaching"],
        title: "Movie Finder",
        description:
          "A beginner-friendly app built for the DreamHacks 2025 hackathon that lets users search movies via the TMDb API and save favourites",
        image: "/movie-finder.png",
        moreInfoLink: "",
        githubLink: "https://github.com/maraliwayway/movie-finder",
      },
    ]
  
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto">
        <header className="flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/projects"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/experience"
            rel="noopener noreferrer"
          >
            Experience
          </a>
        </header>
        <main className="w-full">
        <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">Projects</h2>

  
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-full"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-5 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-[color:var(--heading)]">{project.title}</h2>
                      <p className="text-[color:var(--foreground)] mb-4">{project.description}</p>
  
                      {/* Tags section */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags &&
                          project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-[color:var(--foreground)]"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    </div>
  
                    <div className="flex justify-end gap-4">
                      {project.moreInfoLink && (
                        <a
                          href={project.moreInfoLink}
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center gap-1"
                          aria-label={`More information about ${project.title}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Learn More
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="text-gray-700 hover:text-black transition-colors duration-200 flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer className="text-center">
           
           <a
              className="flex items-center gap-2  hover:underline hover:underline-offset-4"
              href="https://github.com/maraliwayway"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mara's GitHub profile"
            >
              <Image src="/github.png" alt="" width={15} height={15} className="w-5 h-5" aria-hidden="true" />
              View Website Code
            </a>
        </footer>
      </div>
    )
  }
  