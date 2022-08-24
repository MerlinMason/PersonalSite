import React from "react";

interface Props {
    href: string;
    className?: string;
    ariaLabel?: string;
}

const Link: React.FC<Props> = ({ href, className = "", ariaLabel, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
    >
        {children}
    </a>
);

export default Link;
