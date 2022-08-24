import React from "react";
import Image from "next/image";

import Link from "./Link";
import ExternalLink from "./ExternalLink";

const Layout: React.FC = ({ children }) => {
    const containerClass = "container mx-auto max-w-[1150px] px-4 sm:px-6";

    const socialLinks = [
        {
            link: "https://github.com/MerlinMason",
            title: "GitHub",
            icon: "/github.png",
        },
        {
            link: "https://www.linkedin.com/in/merlin-mason",
            title: "LinkedIn",
            icon: "/linkedin.png",
        },
        {
            link: "https://twitter.com/MerlinMason",
            title: "Twitter",
            icon: "/twitter.png",
        },
    ];

    return (
        <>
            <header className="py-4 text-white/80 text-sm bg-white/5 shadow-lg">
                <div className={`${containerClass} flex items-center space-x-4`}>
                    <Link href="/" className="flex-grow" ariaLabel="Home">
                        Merlin Mason
                    </Link>
                    <Link href="/blog" className="hover:text-white">
                        Blog
                    </Link>
                    <Link href="/resume" className="hover:text-white">
                        Résumé
                    </Link>

                    {/*
                        <Link href="/tech" className="text-bold text-lg hover:text-white">
                        Tech
                        </Link>
                        <Link href="/journal" className="text-bold text-lg hover:text-white">
                        Journal
                    </Link>
                    */}
                </div>
            </header>
            <div className={containerClass}>
                <main className="py-20">{children}</main>
                <div className="flex gap-6 justify-center mb-6">
                    {socialLinks.map(({ link, title, icon }) => (
                        <ExternalLink
                            key={link}
                            href={link}
                            className="opacity-80 hover:opacity-100 transition-opacity duration-150"
                        >
                            <Image src={icon} width={32} height={32} alt={`${title} logo`} />
                        </ExternalLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Layout;
