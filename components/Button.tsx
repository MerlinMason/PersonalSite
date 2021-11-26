import React from "react";
import Link from "next/link";

interface CommonProps {
    fit?: boolean;
}
type AsProps =
    | { as: "button"; href?: never; type: "button" | "submit" }
    | { as: "link"; href: string; type?: never };

type Props = CommonProps & AsProps;

const Button: React.FC<Props> = ({ fit, as, href, type, children }) => {
    const wrapperClass = `${
        fit ? "w-full" : ""
    } rounded relative overflow-hidden inline-flex group items-center justify-center px-6 py-2 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white`;
    const innerClass =
        "absolute w-0 h-0 transition-all duration-300 ease-out bg-gradient-radial from-white/10 via-transparent to-transparent rounded-full group-hover:w-80 group-hover:h-36";
    const childrenClass = "relative font-semibold text-white/80 group-hover:text-white";

    if (as === "link") {
        return (
            <Link href={String(href)}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={wrapperClass}>
                    <span className={innerClass} />
                    <span className={childrenClass}>{children}</span>
                </a>
            </Link>
        );
    }
    return (
        // convoluted way to appease eslint
        <button type={type === "button" ? "button" : "submit"} className={wrapperClass}>
            <span className={innerClass} />
            <span className={childrenClass}>{children}</span>
        </button>
    );
};

export default Button;
