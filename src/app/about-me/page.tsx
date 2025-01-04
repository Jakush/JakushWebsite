import {Menu} from "@/components/Menu";
import './page.css'
import {
    IconBolt,
    IconBrandAdobeAfterEffect,
    IconBrandAdobeIllustrator,
    IconBrandAdobePhotoshop, IconBrandAdobePremier,
    IconBrandCss3,
    IconBrandGit,
    IconBrandGithub, IconBrandHtml5, IconBrandKotlin, IconBrandNextjs, IconBrandNodejs,
    IconBrandReactNative,
    IconBrandTailwind,
    IconBrandTypescript, IconBrandUbuntu, IconBrandVisualStudio, IconBrandVite,
    IconCoffee, IconMan
} from "@tabler/icons-react";
import {TechnologyIcon} from "@/components/TechnologyIcon";

export default function App() {
    return (
        <div>
            {Menu()}
            <div className="aboutmepage">
                <h1 className="title mt-12">
                    <IconMan size="32" />
                    <p>About Me</p>
                </h1>
                {/* Works on github */}
                <img src="JakushWebsite/avatar2.jpg" alt="logo" className="logo" width={160} height={160} />
                <div className="box">
                    <p>Hey, my name is <span className="special">Jakub Šulc</span> and I can be known by my nickname <span className="special">Jakush</span> or <span className="special">Jakush.Dev</span>.
                        I am 16 years old Developer which I put into every project I do. My goals and my motivation is to
                        always learn or do something new. Great part of my projects are unfortunately not available anywhere as open-source,
                        since most of my projects are just my testing playground. Although some of my projects are open-source and you can look on them
                        my <a href="https://github.com/Jakush" target="_blank">GitHub</a> although I recommend you to not look as most of these
                        projects are older and my experience has grown exponentially since then. You can also learn more about my
                        projects I worked on <a href="/projects">here</a>.
                    </p>
                </div>
                <h1 className="title mt-28">
                    <IconBolt size="32" />
                    <p>Technologies</p>
                </h1>
                <div className="box">
                    <p>I am constantly trying out new technologies I find, below you can see which I work with and use often:</p>
                    <div className="technologiesbox mt-8">
                        <TechnologyIcon icon={<IconBrandTypescript />} hoverText="TypeScript" color="#007ACC" />
                        <TechnologyIcon icon={<IconBrandReactNative />} hoverText="React" color="#61DAFB" />
                        <TechnologyIcon icon={<IconCoffee />} hoverText="Java" color="#FFBF00" />
                        <TechnologyIcon icon={<IconBrandTailwind />} hoverText="Tailwind CSS" color="#38B2AC" />
                        <TechnologyIcon icon={<IconBrandGithub />} hoverText="GitHub" color="#F0FFFF" />
                        <TechnologyIcon icon={<IconBrandVite />} hoverText="Vite" color="#646CFF" />
                        <TechnologyIcon icon={<IconBrandNextjs />} hoverText="Next.js" color="#00FFFF" />
                        <TechnologyIcon icon={<IconBrandUbuntu />} hoverText="Ubuntu" color="#E95420" />
                        <TechnologyIcon icon={<IconBrandGit />} hoverText="Git" color="#F05032" />
                        <TechnologyIcon icon={<IconBrandVisualStudio />} hoverText="Visual Studio" color="#0CAFFF" />
                        <TechnologyIcon icon={<IconBrandNodejs />} hoverText="Node.js" color="#339933" />
                        <TechnologyIcon icon={<IconBrandKotlin />} hoverText="Kotlin" color="#A97BFF" />
                        <TechnologyIcon icon={<IconBrandCss3 />} hoverText="CSS3" color="#1572B6" />
                        <TechnologyIcon icon={<IconBrandHtml5 />} hoverText="HTML5" color="#E34F26" />
                        <TechnologyIcon icon={<IconBrandAdobePhotoshop />} hoverText="Adobe Photoshop" color="#0096FF" />
                        <TechnologyIcon icon={<IconBrandAdobeIllustrator />} hoverText="Adobe Illustrator" color="#FF9A00" />
                        <TechnologyIcon icon={<IconBrandAdobeAfterEffect />} hoverText="Adobe After Effects" color="#9999FF" />
                        <TechnologyIcon icon={<IconBrandAdobePremier />} hoverText="Adobe Premiere Pro 2025" color="#A020F0" />
                    </div>
                </div>
                <div className="box mt-8">
                    <p>I don&#39;t use any program made by <span className="special">Adobe</span> really often, but I plan to learn how to work with it.
                        Except of these technologies, I also use pretty often software from <span className="special">Jetbrains
                        </span> as <span className="special">IntelliJ IDEA Ultimate</span>, <span className="special">Rider</span> or <span className="special">
                            Webstorm</span>.
                    </p>
                </div>
                <div className="box mt-12 mb-20">
                    <p>I am still in the process of learning many of these technologies,
                        but my passion for innovation and creative problem-solving
                        keeps me motivated every step of the way. I find inspiration in exploring new ideas and techniques,
                        and I am committed to continuously expanding my skills and knowledge to become the best I can be.
                    </p>
                </div>
            </div>
        </div>
    );
}