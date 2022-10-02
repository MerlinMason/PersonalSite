type PostDate = string;

type Post = {
    url: string;
    frontmatter: {
        title: string;
        pubDate: PostDate;
        heroImage?: string;
        tags: string[];
        timeToRead: string;
    };
};
