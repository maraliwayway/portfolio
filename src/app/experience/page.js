export default function Experience() {
    const workExperiences = [
      {
        title: "Coding Instructor",
        duration: "May 2024 - Present",
        company: "SFU Science Alive",
        description:
          "Led a week-long AI/ML camp for 40+ students in grades 7–9. Taught STEM workshops on web development (HTML, CSS, JavaScript), Figma prototyping, and block-based programming with Thunkable.",
        image: "/sfu-science-alive.jpg",
      },
      {
        title: "Coding Instructor",
        duration: "Mar 2022 - May 2024",
        company: "Code Ninjas",
        description:
          "Taught week-long STEM-based coding camps to students aged 5 to 14. Assisted students with debugging their Javascript and block-based code. Managed conflicts between students, promoting fairness and maintaining a positive learning environment.",
        image: "/code-ninjas.jpg",
      },
    ]
  
    const extracurricularExperiences = [
      {
        title: "FAS Student Ambassador",
        duration: "Jan 2025 - Present",
        company: "SFU Faculty of Applied Sciences",
        description:
          "Completed ambassador training to represent SFU's Faculty of Applied Sciences in recruitment and outreach activities effectively. Led campus tours for prospective university students.",
        image: "/fas-ambassador.jpg",
      },
      {
        title: "Co-Events Coordinator",
        duration: "May 2024 - Present",
        company: "SFU Women in Computing Science",
        description:
          "Planned and executed 3 welcome events for 30+ new students in one week. Managed budgets, logistics, and volunteers for successful event operations.",
        image: "/co-events-coordinator.jpeg",
      },
      {
        title: "Pepper Workshop Host",
        duration: "Oct 2024",
        company: "Try/Catch 2024",
        description:
          "Taught 60 high school students to code chatbots with Python and NAOqi. Deployed and debugged Python scripts on Pepper the Robot via SSH. Resolved technical issues to ensure smooth workshop flow.",
        image: "/pepper.JPG",
      },
      {
        title: "FAS HIVE Welcome Leader",
        duration: "Jul 2024 - Sep 2024",
        company: "SFU Student Services",
        description:
          "Led a campus tour and supported faculty info sessions. Moderated a Canvas course for 60 new students, responding to comments within 48 hours. Planned and ran events tailored to student interests.",
        image: "/hive-leader.jpg",
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
  
          {/* Work Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">Technical Work Experience</h2>
            <div className="space-y-8">
              {workExperiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-full"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src={experience.image || "/placeholder.svg"}
                        alt={`Logo of ${experience.company}`}
                        className="w-full h-48 md:h-full object-contain p-4"
                      />
                    </div>
                    <div className="md:w-2/3 p-5">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-[color:var(--heading)]">{experience.title}</h3>
                        <span className="text-sm text-gray-500">{experience.duration}</span>
                      </div>
                      <div className="text-md font-medium text-[color:var(--heading)] mb-3">{experience.company}</div>
                      <p className="text-[color:var(--foreground)]">{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Extracurricular Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">Extracurricular Experience</h2>
            <div className="space-y-8">
              {extracurricularExperiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-full"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src={experience.image || "/placeholder.svg"}
                        alt={`Image related to ${experience.title} at ${experience.company}`}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-5">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-[color:var(--heading)]">{experience.title}</h3>
                        <span className="text-sm text-gray-500">{experience.duration}</span>
                      </div>
                      <div className="text-md font-medium text-[color:var(--heading)] mb-3">{experience.company}</div>
                      <p className="text-[color:var(--foreground)]">{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <footer>© 2025 Mara Liwayway David. All rights reserved.</footer>
      </div>
    )
  }
  