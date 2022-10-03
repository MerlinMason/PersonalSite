import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";

const get = () =>
    rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: import.meta.env.SITE,
        items: import.meta.glob("./blog/**/*.mdx"),
        stylesheet: "/rss/styles.xsl",
    });

// eslint-disable-next-line import/prefer-default-export
export { get };
