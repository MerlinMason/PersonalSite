import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";

const Home: React.FC = () => (
    <>
        <h1 className="font-bold text-hero mb-12 text-white/90">
            Hi 👋 I&apos;m Merlin,
            <br /> a <span className="text-purple-500">software engineer</span> living & working in
            London, UK.
        </h1>

        <Card className="space-y-5">
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
                Most recently (2014 - 2021), I co-founded and led engineering at Mo, building a 12
                strong engineering team and a product used by 100,000 users from scratch. With a
                small team we created a product that would often win over industry incumbents
                (Yammer, Reward Gateway, Perkbox etc) in sales processes.
            </p>

            <Button as="link" href="/resume">
                See full résumé
            </Button>
        </Card>
    </>
);

export default Home;
