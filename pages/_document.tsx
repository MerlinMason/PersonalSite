import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html
                lang="en"
                className="bg-[#230725] bg-gradient-radial from-[#060636] to-[#330a36] text-white text-xl selection:text-purple-600 selection:bg-gray-900"
            >
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
