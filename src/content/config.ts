// eslint-disable-next-line import/no-unresolved
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        heroImage: z.string(),
        tags: z.array(z.string()),
        timeToReadMins: z.number(),
        draft: z.boolean().optional(),
    }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
    blog: blogCollection,
};
