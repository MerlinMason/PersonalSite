import { ExternalLinkIcon, CalendarIcon } from "@heroicons/react/outline";
import Card from "../components/Card";

import ExternalLink from "../components/ExternalLink";

const Resume: React.FC = () => {
    const roles = [
        {
            title: "Lead Frontend Engineer",
            contract: false,
            company: "Healios",
            link: "https://healios.org.uk",
            from: new Date("nov 2021"),
            to: new Date(),
        },
        {
            title: "Cofounder & CTO",
            contract: false,
            company: "Mo",
            link: "https://mo.work",
            from: new Date("dec 2014"),
            to: new Date("nov 2021"),
        },
        {
            title: "Senior JavaScript Engineer",
            contract: true,
            company: "ATP",
            link: "https://atp.io",
            from: new Date("jun 2014"),
            to: new Date("jul 2015"),
        },
        {
            title: "JavaScript Engineer",
            contract: false,
            company: "UK2 Group",
            link: "https://www.thghosting.com",
            from: new Date("apr 2013"),
            to: new Date("jun 2014"),
        },
        {
            title: "UI Engineer",
            contract: true,
            company: "Brilliant Basics",
            link: "http://www.wongdoody.com",
            from: new Date("jun 2012"),
            to: new Date("may 2013"),
        },
        {
            title: "Web Developer",
            contract: true,
            company: "Andrews&Co",
            link: null,
            from: new Date("oct 2010"),
            to: new Date("jun 2012"),
        },
        {
            title: "Web & UX Designer",
            contract: true,
            company: "MakeWav.es",
            link: null,
            from: new Date("dec 2008"),
            to: new Date("sep 2010"),
        },
    ];

    const formatDate = (date: Date) =>
        date.toLocaleDateString("en-GB", {
            month: "short",
            year: "numeric",
        });

    return (
        <>
            <h1 className="font-bold text-hero mb-12 text-white/90">Résumé</h1>
            <Card>
                <ol className="divide-y divide-white/10">
                    {roles.map(({ title, company, contract, link, from, to }) => (
                        <li key={company} className="py-4 first:pt-0 last:pb-0">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                                {link ? (
                                    <ExternalLink
                                        href={link}
                                        className="flex gap-2 hover:text-purple-500"
                                    >
                                        {company}
                                        <ExternalLinkIcon className="w-4" />
                                    </ExternalLink>
                                ) : (
                                    <>{company}</>
                                )}
                            </h2>

                            <h3 className="mb-2 sm:mb-0">
                                <span
                                    className={`inline-block text-xs uppercase font-bold px-2 mr-2 rounded-full text-purple-900 ${
                                        contract ? "bg-blue-300" : "bg-pink-300"
                                    }`}
                                >
                                    {contract ? "Contract" : "Perm"}
                                </span>

                                <div className="font-bold sm:inline">{title}</div>
                            </h3>

                            <div className="flex items-center gap-2 text-xs sm:text-sm">
                                <CalendarIcon className="w-4" />
                                {formatDate(from)}
                                {" — "}
                                {formatDate(to)}
                            </div>
                        </li>
                    ))}
                </ol>
            </Card>
        </>
    );
};

export default Resume;
