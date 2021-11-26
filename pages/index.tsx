import React from "react";

import ExternalLink from "../components/ExternalLink";

const Home: React.FC = () => (
    <>
        <h1 className="font-bold text-hero mb-12 text-white/90">
            Hi 👋 I&apos;m Merlin,
            <br /> a software engineer living & working in London, UK.
        </h1>

        <div className="space-y-5 text-white/70 font-light leading-relaxed mb-6 p-4 sm:p-6 bg-white/5 shadow-2xl rounded">
            <h2 className="font-semibold text-2xl mb-6 text-white/80">
                I&apos;m passionate about building the teams, processes and software that create
                amazing digital products.
            </h2>
            <p>
                I have a T-shaped skill set with a deep understanding of the frontend stack and a
                broad understanding of product design and UX, backend engineering, devops and
                infrastructure, project and people management, business operations, security and
                compliance.
            </p>

            <p>
                Most recently (2014 - 2021), I co-founded and led engineering at{" "}
                <ExternalLink
                    href="https://mo.work"
                    className="text-purple-400 hover:text-purple-300"
                >
                    Mo
                </ExternalLink>
                , building a 12 strong engineering team and a product used by 100,000 users from
                scratch. With a small team we created a product that would often win over industry
                incumbents (Yammer, Reward Gateway, Perkbox etc) in sales processes.
            </p>
        </div>
    </>
);

export default Home;
