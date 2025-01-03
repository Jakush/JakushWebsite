import {JSX} from "react";

type ProjectCardProps = {
    projectName: string;
    timeFrame: string;
    description: string;
};

export function ProjectCard({projectName, timeFrame, description}: ProjectCardProps): JSX.Element {
    return <div className="project">
        <p className="title">{projectName}</p>
        <h4 className="timeframe">{timeFrame}</h4>
        <p className="description">{description} </p>
    </div>
}