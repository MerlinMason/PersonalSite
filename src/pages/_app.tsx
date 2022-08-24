import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";

import Layout from "../components/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Merlin Mason</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="theme-color" content="#030322" />
        </Head>

        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
);

export default App;
