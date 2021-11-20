import React from "react";
import Link from "./Link";

const Layout: React.FC = ({ children }) => (
    <>
        <header className="container mx-auto px-4 sm:px-6 py-4 flex items-center space-x-4 text-white/80">
            <Link href="/" className="text-bold font-extrabold text-2xl flex-grow" ariaLabel="Home">
                {`<M/>`}
            </Link>
            <Link href="/work" className="text-bold text-lg hover:text-white">
                Work
            </Link>
            <Link href="/tech" className="text-bold text-lg hover:text-white">
                Tech
            </Link>
            <Link href="/journal" className="text-bold text-lg hover:text-white">
                Journal
            </Link>
        </header>

        <main className="py-20">{children}</main>
    </>
);

export default Layout;
