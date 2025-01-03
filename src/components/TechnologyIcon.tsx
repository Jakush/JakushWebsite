import {JSX} from "react";

type TechnologyIconProps = {
    icon: JSX.Element;
    hoverText: string;
    color: string;
};

function ShowTooltip(text: string): JSX.Element {
    return (
        <p className="hoverBar">{text}</p>
    );
}

export function TechnologyIcon({icon, hoverText, color}: TechnologyIconProps): JSX.Element {
    return (
        <div style={{color: color, width: "32px", height: "32px"}}>
            {icon}
            {ShowTooltip(hoverText)}
        </div>
    );
}