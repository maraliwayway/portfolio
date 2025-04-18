import ExperienceCard from '../ui/ExperienceCard';

export default function WorkExperience({ experiences }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">Technical Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
            imageObjectFit="contain"
            imagePadding="p-4"
          />
        ))}
      </div>
    </section>
  );
}