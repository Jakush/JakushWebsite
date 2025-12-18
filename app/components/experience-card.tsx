import ContentHeader from "@/app/components/content-item/content-header";
import ContentDividerLine from "@/app/components/content-item/content-divider-line";
import ContentCategory from "@/app/components/content-item/content-category";
import React from "react";

interface Experience {
    title: string;
    company: string;
    from: string;
    to: string;
    description: string;
}

const experiences: Experience[] = [
    {
        title: "Technical Support Specialist",
        company: "BatCore.eu",
        from: "2024",
        to: "2025",
        description: "Customer support for a hosting provider (Minecraft servers, VPS). Handling support tickets, assisting customers with technical issues, and writing user documentation and guides.",
    },
    {
        title: "Technical Community Support",
        company: "LearnSpigot",
        from: "2024",
        to: "present",
        description: "Providing Java and Spigot-related technical support for a large development course (10k+ students) via Discord.",
    },
    {
        title: "Software Developer",
        company: "Survival-Games.cz",
        from: "2023",
        to: "2024",
        description: "Developed and maintained custom gameplay features and updates. Implemented major SkyWars updates (kits, abilities, currencies, upgrades), balance changes, bug fixes, and a limited-time UHCRun “Assassins” mode.",
    },
    {
        title: "Software Developer",
        company: "Rajce.pro",
        from: "2022",
        to: "2023",
        description: "Maintained and extended multiple servers (Survival, Lobby, Anarchy). Built custom Java plugins for moderation, clans, seasonal events, and server utilities; worked with databases and server-side systems.",
    },
];

export default function ExperienceCard() {
    const sortedExperiences = [...experiences].sort(
        (a, b) => Number(a.from) - Number(b.from)
    ).reverse();

    return (
        <ContentCategory sectionId={"experience"}>
            <ContentHeader>Experience</ContentHeader>
            <ContentDividerLine />
            <div className="py-8">
                <div className="flex flex-col gap-8 border-l border-secondary-500 px-8">
                    {sortedExperiences.map((exp, index) => {
                        const showYear =
                            index === 0 || exp.from !== sortedExperiences[index - 1].from;

                        return (
                            <div key={`${exp.title}-${index}`} className="relative flex flex-col gap-2 group">
                                <div className="absolute -left-8 top-1/2 size-2 rounded-full bg-primary-400 -translate-y-1/2 -translate-x-1/2 group-hover:animate-pulse" />

                                {showYear && (
                                    <p className="absolute -left-18 top-1/2 text-primary-500 -translate-y-1/2 -translate-x-1/2 font-inter">
                                        {exp.from}
                                    </p>
                                )}

                                <div className="rounded-xl p-2">
                                    <div className="flex justify-between gap-4">
                                        <h4 className="font-space-grotesk font-bold text-lg">
                                            {exp.title}
                                        </h4>
                                        <span className="font-inter text-secondary-400">
                                          {exp.from} – {exp.to}
                                        </span>
                                    </div>

                                    <h5 className="font-inter text-primary-300">{exp.company}</h5>

                                    <p className="text-accent-500">{exp.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </ContentCategory>
    );
}