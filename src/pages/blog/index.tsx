import Link from "next/link";

// import Button from "../../components/Button";
import Card from "../../components/Card";
import { getAllPosts, type TPost } from "../../utils/blog";

type Props = {
    posts: TPost[];
};

const Index = ({ posts }: Props) => (
    <>
        <h1 className="font-bold text-hero mb-12 text-white/90">Blog</h1>
        {console.log(posts)}
        <Card className="space-y-5">
            <ol>
                {posts.map(({ slug, title }) => (
                    <li key={slug}>
                        <Link href={`/blog/${slug}`}>{title}</Link>
                    </li>
                ))}
            </ol>
        </Card>
    </>
);

const getStaticProps = async () => {
    const posts = getAllPosts();

    return {
        props: { posts },
    };
};

export default Index;
export { getStaticProps };
