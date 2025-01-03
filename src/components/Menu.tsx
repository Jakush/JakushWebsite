import {JSX} from "react";

export function Menu(): JSX.Element {
    return (
        <div className="menu">
            <h1>Jakush</h1>
            <a href="./">Home</a>
            <a href="./about-me">About Me</a>
            <a href="./projects">Projects</a>
        </div>
    );
}