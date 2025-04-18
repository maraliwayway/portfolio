"use client";
import { useState } from 'react';
import Image from "next/image";
import MainLayout from '../../components/sections/MainLayout';
import SocialButton from '../../components/ui/SocialButton';
import { socialLinks } from '@/constants/socialLinks';

export default function Home() {
  // Need to initialize state here because of the onClick handler for Email button
  const [links, setLinks] = useState(socialLinks);
  
  return (
    <MainLayout>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 py-8">
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--heading)] tracking-tight">
            Mara Liwayway David
          </h1>

          <h2 className="text-xl sm:text-2xl leading-relaxed text-[color:var(--foreground)]">
            Hi! I&apos;m Mara, a Computing Science student at SFU. I&apos;m passionate about teaching, diversity in tech, and software
            development.
          </h2>

          <div className="flex gap-6 items-center justify-center md:justify-start mt-2">
            {links.map((link, index) => (
              <SocialButton
                key={index}
                icon={link.icon}
                text={link.text}
                href={link.href}
                onClick={link.onClick}
                ariaLabel={link.ariaLabel}
              />
            ))}
          </div>
        </div>

        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0">
          <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg">
            <Image
              src="/home/mara.jpg"
              alt="A headshot of Mara Liwayway David"
              fill
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, 20rem"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}