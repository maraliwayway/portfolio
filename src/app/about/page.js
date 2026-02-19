import MainLayout from "../../../components/sections/MainLayout";
import Image from "next/image";

export default function About() {
  return (
    <MainLayout>
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[color:var(--heading)] mb-4">About Mara</h1>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-[color:var(--foreground)]">
              <p>
                Hi! I&apos;m Mara, an undergraduate Computing Science student at Simon Fraser University. I first got into coding through Hackergal&apos;s 4th annual hackathon in grade eight, and immediately fell in love with programming. That experience also sparked my passion for mentorship, which led me to become a coding instructor so I could help others discover the same excitement I felt early on.
              </p>
              <p>
                From building RedactAI, a local-first AI security tool I solo-developed in 24 hours at a TELUS-sponsored national hackathon competing against 180+ teams, to rebuilding nonprofit web platforms for 7,400+ users as a Software Developer with SFU Blueprint, I&apos;ve had the chance to work on projects I&apos;m really proud of.
              </p>
              <p>
                Outside of technical work, I serve as President of SFU Women in Computing Science, leading a team of 13 to support 600+ students across the faculty. I&apos;ve also taught coding workshops for SFU Science Alive, hackathons, and outreach events, and represented the Faculty of Applied Sciences as a Student Ambassador.
              </p>
              <p>
                I&apos;m currently working as a Machine Learning Software Engineer Co-op student at the Royal Bank of Canada (RBC), where I&apos;ll be finishing my term at the end of Summer 2026.
              </p>
              <p>
                I&apos;m currently seeking Fall 2026 co-op opportunities, particularly in Machine Learning, where I can continue building impactful AI systems and infrastructure, and grow alongside passionate teams. If you&apos;re interested in collaborating, feel free to reach out!
              </p>
            </div>
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
           
                <div className="w-full h-100 bg-gray-100 flex items-center justify-center text-gray-500">
                  
                </div>
         
                <Image
                    src="/about/me.JPG"
                    alt="Mara&rsquo;s journey in tech"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
               
              </div>
            </div>
          </section>

          {/* Hobbies and Interests Section */}
          <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">Hobbies and Interests</h2>

          <section className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <div className="space-y-8">

              {/* Hobby Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Hobby 1 */}
                <div className="space-y-4">
                  <div className="relative w-full h-150 rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                    </div>
                    <Image
                      src="/about/sing.jpg"
                      alt="Description of hobby"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[color:var(--heading)] mb-2">Singing</h3>
                    <p className="text-[color:var(--foreground)]">
                      Growing up in a Filipino family and community, I was always amazed by how so many of my people are breathtaking vocalists! I performed in Concert and Jazz Choir in high school, and sang in Church settings as well. Slowly (but surely), I developed my vocal technique and I&apos;m confident in singing with people and in front of huge audiences. I&apos;m always down for a Karaoke night, so let me know if you want to hang. In the photo above, I&apos;m singing at a school event!
                    </p>
                  </div>
                </div>

                {/* Hobby 2 */}
                <div className="space-y-4">
                  <div className="relative w-full h-150 rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
                    </div>
                    <Image
                      src="/about/cosplay.jpg"
                      alt="Description of hobby"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[color:var(--heading)] mb-2">Cosplaying</h3>
                    <p className="text-[color:var(--foreground)]">
                      I&apos;m a huge anime fan and have always loved dressing up, so cosplaying came naturally to me! Some of my favorite shows are Gurren Lagann, Fullmetal Alchemist: Brotherhood, and Welcome to the NHK. The only challenge is that cosplay can get expensive, especially with full pre-made outfits, but I still love the process. You&apos;ll usually find me walking around Anirevo Vancouver in the summer. The photo above shows me as Misa from Death Note!
                    </p>
                  </div>
                </div>

                {/* Hobby 3 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-[color:var(--heading)] mb-2">Playing the Guitar</h3>
                    <p className="text-[color:var(--foreground)]">
                      I&apos;m still a beginner at guitar and working on getting the basics down, but I picked it up so I could accompany myself while singing. It&apos;s definitely a challenge (especially on the fingers, ouch!), but I&apos;m excited to keep improving little by little. For now, I&apos;m learning chords, practicing simple songs, and trying to build muscle memory.
                    </p>
                  </div>
                </div>

                {/* Hobby 4 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-[color:var(--heading)] mb-2">Multimedia</h3>
                    <p className="text-[color:var(--foreground)]">
                      I don&apos;t take this hobby too seriously, but when it comes to editing videos or designing creative materials, I really enjoy it, and I think I do pretty well! In my Intro to Software Engineering course, I produced the <a
                      href="https://www.youtube.com/watch?v=tNU9Gm32i-0"
                      className="text-blue-600 hover:underline"
                      target="_blank" rel="noopener noreferrer"
                      >
                        final demo video
                      </a> for our group project, and it won Best Video Presentation in a class vote out of 25 teams. I like working on small creative projects and putting care into project branding.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}