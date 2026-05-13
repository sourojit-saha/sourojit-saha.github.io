import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    demoUrl: z.string().optional(),
    reportUrl: z.string().optional(),
    externalUrl: z.string().optional(),
  }),
});

export const collections = { projects };
