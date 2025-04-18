import ExperienceCard from '../ui/ExperienceCard';

export default function ExtracurricularExperience({ experiences }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">Extracurricular Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
            imageObjectFit="cover"
            imagePadding=""
          />
        ))}
      </div>
    </section>
  );
}