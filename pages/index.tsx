import React from "react";
import Image from "next/image";

const Home: React.FC = () => (
    <div className="container mx-auto px-4 sm:px-6">
        <h1 className="font-bold text-hero mb-12 text-white/90">
            Hi 👋 <br />
            I&apos;m Merlin (he/him).
        </h1>

        <div className="space-y-5 text-white/70 font-light leading-relaxed mb-6 p-4 sm:p-6 bg-white/5 shadow-2xl rounded">
            <h2 className="font-semibold text-2xl mb-6 text-white/80">
                I&apos;m a software engineer passionate about building the teams, processes and
                software that create amazing digital products.
            </h2>
            <p>
                I have a T-shaped skill set with a deep understanding of the frontend stack and a
                broad understanding of product design and UX, backend engineering, devops and
                infrastructure, project and people management, business operations, security and
                compliance.
            </p>

            <p>
                Most recently (2014 - 2021), I co-founded and led engineering at{" "}
                <a
                    href="https://mo.work"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                >
                    Mo
                </a>
                , building a 12 strong engineering team and a product used by 100,000 users from
                scratch. With a small team we created a product that would often win over industry
                incumbents (Yammer, Reward Gateway, Perkbox etc) in sales processes.
            </p>
        </div>
        <div className="flex justify-center mb-6">
            <a
                href="https://github.com/MerlinMason"
                target="_blank"
                rel="noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-150"
            >
                <Image src="/github.png" width={32} height={32} alt="GitHub OctoCat logo" />
            </a>
        </div>
    </div>
);

export default Home;
