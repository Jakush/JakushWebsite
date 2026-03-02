
import React from "react";
import Image from 'next/image'
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconMail,
    IconMapPin,
} from "@tabler/icons-react";
import SkillCard from "@/app/components/skill-card";
import ExperienceCard from "@/app/components/experience-card";
import EmailProtect from "./components/email-protect";

const socials = [
    { name: "GitHub", icon: IconBrandGithub, link: "https://github.com/Jakush" },
    { name: "LinkedIn", icon: IconBrandLinkedin, link: "https://www.linkedin.com/in/jakush" },
    { name: "Instagram", icon: IconBrandInstagram, link: "https://www.instagram.com/jakush.dev/" },
];

export default function HomePage() {
  return (
    <main className="px-16 mx-auto w-full h-screen max-md:px-12 max-sm:px-8 max-[300px]:px-1">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-lg:flex flex-col">
        <div className="sm:col-span-1 border-r border-accent-600 py-10 max-lg:border-r-0 max-lg:border-b max-lg:py-8">
          <div className="sticky top-1/2 -translate-y-1/2 w-full flex flex-col gap-4 items-center max-lg:top-0 max-lg:translate-y-0">
            <Image
                src="https://cdn.discordapp.com/avatars/742790698407034971/d5f4b428ae04cfcba5d1f7d9118e216e.webp?size=240"
                alt="logo"
                height="240"
                width="240"
                className="size-16 rounded-full border-3 border-accent-600"
            />

            <div className="flex flex-col items-center gap-2 text-primary-50">
              <h1 className="font-space-grotesk font-bold text-2xl">Jakush</h1>
              <p className="font-inter text-lg text-center">Medior Software Engineer</p>

              <hr className="border border-accent-600 w-2/3" />

              <p className="font-inter text-sm text-accent-400 text-center">5+ years building software</p>
              <p 
                className="font-inter text-sm text-accent-400 text-center"
              >
                Member of <a href="https://phast.gg/" target="_blank" className="text-secondary-400 hover:text-hover-200 transition-all duration-300">Phast.gg</a>
              </p>

              <div className="flex flex-col items-center gap-2 text-secondary-400 mt-4">
                <EmailProtect mail="hello@jakush.dev" className="font-inter flex gap-1 items-center text-sm hover:text-hover-200 cursor-pointer transition-all duration-300">
                  <IconMail size={20} /> hello@jakush.dev
                </EmailProtect>
                <span className="font-inter flex gap-1 items-center text-sm"><IconMapPin size={20} /> Czech Republic</span>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              {socials.map((social, index) => (
                <a href={social.link} key={index}>
                  <social.icon 
                    size="28" 
                    className="text-primary-300 hover:text-green-400 transition-all duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>


        <div className="sm:col-span-2 w-full flex flex-col gap-16 h-full px-16 py-16 max-md:gap-16 max-sm:px-8 max-md:py-0 max-md:pt-16">
          <SkillCard />
          <ExperienceCard />
        </div>
      </div>
    </main>
  );
}
