import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src", "posts");

type Tags = "TypeScript" | "React";

export type TPost = {
    content: string;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: Tags[];
};

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): TPost {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        content,
        slug: realSlug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags,
    };
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
