// import Link from "next/link";

// import Button from "../../components/Button";
import Card from "../../components/Card";
import { getAllPosts, getPostBySlug, type TPost } from "../../utils/blog";
import markdownToHtml from "../../utils/markdown-to-html";

const Post = ({ title, content, tags }: TPost) => (
    <>
        <h1 className="font-bold text-hero mb-12 text-white/90">Blog</h1>

        <Card className="space-y-5">
            <h1>{title}</h1>
            {tags.map((tag) => (
                <span>{tag}</span>
            ))}

            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Card>
    </>
);

type Params = {
    params: {
        slug: string;
    };
};

async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug);
    const content = await markdownToHtml(post.content || "");

    return {
        props: {
            ...post,
            content,
        },
    };
}

async function getStaticPaths() {
    const posts = getAllPosts();

    return {
        paths: posts.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
}

export default Post;
export { getStaticPaths, getStaticProps };
