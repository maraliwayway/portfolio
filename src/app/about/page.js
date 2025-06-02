import MainLayout from "../../../components/sections/MainLayout";
import Image from "next/image";

export default function About() {
  return (
    <MainLayout>
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[color:var(--heading)] mb-4">About Mara</h1>
          <p className="text-lg text-[color:var(--foreground)] max-w-2xl mx-auto">
          This is real, this is me! 🎤
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-[color:var(--foreground)]">
                <p>
                Hi! I’m Mara, an upcoming third-year Computing Science student at Simon Fraser University. I first got into coding through Hackergal’s 4th annual hackathon in grade eight, and immediately fell in love with programming. That experience also sparked my passion for mentorship, which led me to become a coding instructor so I could help others discover the same excitement I felt early on.
                </p>
                <p>
                Beyond the classroom, I’ve taught coding workshops for SFU Science Alive, hackathons, and outreach events. I&rsquo;ve also actively supported community outreach as a Student Ambassador for the Faculty of Applied Sciences and Co-President of SFU Women in Computing Science.
                </p>
                <p>
                My current focus is on enhancing my full-stack web development skills, alongside exploring AI/ML through AI4Good Lab. I’m currently looking for co-op or internship opportunities where I can keep learning, build impactful tools, and grow alongside like-minded teams. If you&rsquo;re interested in collaborating, feel free to contact me :D
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
              {/* Introduction */}
              

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
                      Growing up in a Filipino family and community, I was always amazed by how so many of my people are breathtaking vocalists! I performed in Concert and Jazz Choir in high school, and sang in Church settings as well. Slowly (but surely), I developed my vocal technique and I&rsquo;m confident in singing with people and in front of huge audiences. I&rsquo;m always down for a Karaoke night, so let me know if you want to hang. In the photo above, I&rsquo;m singing at a school event!
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
                    I’m a huge anime fan and have always loved dressing up, so cosplaying came naturally to me! Some of my favorite shows are Gurren Lagann, Fullmetal Alchemist: Brotherhood, and Welcome to the NHK. The only challenge is that cosplay can get expensive, especially with full pre-made outfits, but I still love the process. You’ll usually find me walking around Anirevo Vancouver in the summer. The photo above shows me as Misa from Death Note!
                    </p>
                  </div>
                </div>

                {/* Hobby 3 */}
                <div className="space-y-4">
                  
                  <div>
                    <h3 className="text-xl font-medium text-[color:var(--heading)] mb-2">Playing the Guitar</h3>
                    <p className="text-[color:var(--foreground)]">
                    I’m still a beginner at guitar and working on getting the basics down, but I picked it up so I could accompany myself while singing. It&rsquo;s definitely a challenge (especially on the fingers, ouch!), but I’m excited to keep improving little by little. For now, I&rsquo;m learning chords, practicing simple songs, and trying to build muscle memory.
                    </p>
                  </div>
                </div>

                {/* Hobby 4 */}
                <div className="space-y-4">
                  
                  <div>
                    <h3 className="text-xl font-medium text-[color:var(--heading)] mb-2">Multimedia</h3>
                    <p className="text-[color:var(--foreground)]">
                    I don’t take this hobby too seriously, but when it comes to editing videos or designing creative materials, I really enjoy it, and I think I do pretty well! In my Intro to Software Engineering course, I produced the <a
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