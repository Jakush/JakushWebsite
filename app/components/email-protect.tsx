"use client";

import { MouseEvent, ReactNode } from "react";

export default function EmailProtect(props: { mail: string, children: ReactNode, className?: string }) {
  const { mail, children, className } = props;
  const handleClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    window.location.href = `mailto:${mail}`;
  };

  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
}