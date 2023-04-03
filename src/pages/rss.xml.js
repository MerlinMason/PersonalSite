import rss from "@astrojs/rss";
// eslint-disable-next-line import/no-unresolved
import { getCollection } from "astro:content";

import { SITE_TITLE, SITE_DESCRIPTION } from "../config";

// eslint-disable-next-line import/prefer-default-export
export async function get() {
    const allBlogPosts = await getCollection("blog", ({ data }) => !data.draft);
    const sortedBlogPosts = allBlogPosts.sort(
        (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    );

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: import.meta.env.SITE,
        items: sortedBlogPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            timeToReadMins: post.data.timeToReadMins,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>en-GB</language>`,
        stylesheet: "/rss/styles.xsl",
    });
}
