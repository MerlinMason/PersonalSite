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

const jobRolesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        contract: z.boolean(),
        link: z.string().url().nullable(),
        dateStart: z.string().transform((str) => new Date(str)),
        dateEnd: z.union([z.string().transform((str) => new Date(str)), z.null()]),
        highlighted: z.boolean().optional(),
        description: z.string().optional(),
    }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
    blog: blogCollection,
    jobRoles: jobRolesCollection,
};
