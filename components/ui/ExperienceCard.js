export default function ExperienceCard({ experience, imageObjectFit = "contain", imagePadding = "p-4" }) {
    return (
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-full"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <img
              src={experience.image || "/placeholder.svg"}
              alt={`Image related to ${experience.title} at ${experience.company}`}
              className={`w-full h-48 md:h-full object-${imageObjectFit} ${imagePadding}`}
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
    );
  }