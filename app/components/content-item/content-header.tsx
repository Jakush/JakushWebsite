import {ReactNode} from "react";

export default function ContentHeader(props : { children: ReactNode }) {
    return (
        <h2 className="flex gap-2 items-center font-space-grotesk font-medium text-xl text-primary-100">
            {props.children}
        </h2>
    );
}