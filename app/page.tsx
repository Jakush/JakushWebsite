
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

const socials = [
    { name: "GitHub", icon: IconBrandGithub, link: "https://github.com/Jakush" },
    { name: "LinkedIn", icon: IconBrandLinkedin, link: "https://www.linkedin.com/in/jakush" },
    { name: "Instagram", icon: IconBrandInstagram, link: "https://www.instagram.com/jakush.dev/" },
];

export default function HomePage() {
    return (
        <main className="px-16 mx-auto w-screen min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-1 border-r border-accent-600 py-10">
                    <div className="sticky top-1/2 -translate-y-1/2 w-full flex flex-col gap-4 items-center">
                        <Image
                            src="https://cdn.discordapp.com/avatars/742790698407034971/d5f4b428ae04cfcba5d1f7d9118e216e.webp?size=240"
                            alt="logo"
                            height="240"
                            width="240"
                            className="size-16 rounded-full border-3 border-accent-600"
                        />

                        <div className="flex flex-col items-center gap-2 text-primary-50">
                            <h1 className="font-space-grotesk font-bold text-2xl">Jakush</h1>
                            <p className="font-inter text-lg">Medior Software Engineer</p>

                            <hr className="border border-accent-600 w-2/3" />

                            <p className="font-inter text-sm text-accent-400">5+ years building software</p>

                            <div className="flex flex-col items-center gap-2 text-secondary-400 mt-4">
                                <a href="mailto:hello@jakush.dev" className="font-inter flex gap-1 items-center text-[0.95rem] hover:text-hover-200 transition-all duration-300"><IconMail size={20} /> hello@jakush.dev</a>
                                <span className="font-inter flex gap-1 items-center text-[0.95rem]"><IconMapPin size={20} /> Czech Republic</span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-2">
                            {socials.map((social, index) => (
                                <a href={social.link} key={index}>
                                    <social.icon size="28" className="text-primary-300 hover:text-green-400 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="sm:col-span-2 w-full flex flex-col gap-24 h-full px-32 py-32">
                    <SkillCard />
                    <ExperienceCard />
                </div>
            </div>
        </main>
    );
}
