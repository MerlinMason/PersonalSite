import React from "react";

interface Props {
    className?: string;
}

const Card: React.FC<Props> = ({ className = "", children }) => (
    <div
        className={`${className} mb-6 p-4 sm:p-6 bg-white/5 shadow-2xl rounded text-white/70 font-light leading-relaxed`}
    >
        {children}
    </div>
);

export default Card;
