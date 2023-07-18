// eslint-disable-next-line import/no-unresolved
import { getCollection } from "astro:content";

const allBlogPosts = await getCollection("blog", ({ data }) => !data.draft);

// eslint-disable-next-line import/prefer-default-export
export async function get() {
    return {
        body: JSON.stringify(allBlogPosts.map(({ slug }) => slug)),
    };
}
