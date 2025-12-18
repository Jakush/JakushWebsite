import {ReactNode} from "react";

export default function ContentCategory(props : { children: ReactNode, sectionId?: string }) {
    if (props.sectionId) {
        return (
            <section id={props.sectionId} className="flex flex-col gap-2">
                {props.children}
            </section>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {props.children}
        </div>
    );
}