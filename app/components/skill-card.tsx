import ContentCategory from "@/app/components/content-item/content-category";
import ContentHeader from "@/app/components/content-item/content-header";
import ContentDividerLine from "@/app/components/content-item/content-divider-line";
import {IconDeviceLaptop, IconLanguage, IconStackFront} from "@tabler/icons-react";
import React, {ReactNode} from "react";

interface SkillCategory {
    title: ReactNode;
    skills: string[];
}

const skills: SkillCategory[] = [
    {
        title: (
            <>
                <IconLanguage size="22" /> Languages
            </>
        ),
        skills: [ "C#", "C++", "Java", "TypeScript" ],
    },
    {
        title: (
            <>
                <IconStackFront size="22" /> Backend
            </>
        ),
        skills: [ "Nest.js", "MongoDB", "MySQL", "Javalin" ],
    },
    {
        title: (
            <>
                <IconDeviceLaptop size="22" /> Frontend
            </>
        ),
        skills: [ "Next.js", "HTML", "CSS" ],
    },
];

export default function SkillCard() {
    return (
        <ContentCategory sectionId={"skills"}>
            <ContentHeader>Core Skills</ContentHeader>
            <ContentDividerLine />
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-md:grid-cols-1">
                {skills.map((skillCat, index) => (
                    <div className="flex flex-col gap-2" key={index}>
                        <h3 className="font-space-grotesk text-accent-400 flex gap-1 items-center">{skillCat.title}</h3>
                        <div className="flex gap-2 font-inter flex-wrap">
                            {skillCat.skills.map((skill, index) => (
                                <span className="px-3 py-1 rounded-xl border border-secondary-500/75 bg-secondary-500/20 text-sm" key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ContentCategory>
    );
}