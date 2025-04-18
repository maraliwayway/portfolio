"use client";
import Image from "next/image"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto">
      <header className="flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
          href="/"
          rel="noopener noreferrer"
          aria-current="page"
        >
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
          href="/projects"
          rel="noopener noreferrer"
        >
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
          href="/experience"
          rel="noopener noreferrer"
        >
          Experience
        </a>
      </header>

      <main className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 py-8">
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--heading)] tracking-tight">
            Mara Liwayway David
          </h1>

          <h2 className="text-xl sm:text-2xl leading-relaxed text-[color:var(--foreground)]">
            Hi! I'm Mara, a Computing Science student at SFU. I'm passionate about teaching, diversity in tech, and software
            development.
          </h2>

          <div className="flex gap-6 items-center justify-center md:justify-start mt-2">
            <a
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-all duration-200"
              href="https://www.linkedin.com/in/maraliwayway/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mara's LinkedIn profile"
            >
              <Image src="/linkedin.png" alt="" width={20} height={20} className="w-5 h-5" aria-hidden="true" />
              LinkedIn
            </a>

            <a
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-all duration-200"
              href="https://github.com/maraliwayway"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mara's GitHub profile"
            >
              <Image src="/github.png" alt="" width={20} height={20} className="w-5 h-5" aria-hidden="true" />
              GitHub
            </a>

            <button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-all duration-200 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("mld18@sfu.ca")
                .then(() => alert("Email copied to clipboard!"))
                .catch((err) => console.error("Failed to copy: ", err));
            }}
            aria-label="Copy Mara's email to clipboard"
          >
            <Image src="/email.png" alt="" width={20} height={20} className="w-5 h-5" aria-hidden="true" />
            Email
          </button>

          </div>
        </div>

        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0">
        
          <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg">
            <Image
              src="/mara.jpg"
              alt="A headshot of Mara Liwayway David"
              fill
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 20rem"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </main>

      <footer className="text-center text-gray-500">© 2025 Mara Liwayway David. All rights reserved.</footer>
    </div>
  )
}
