import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number().optional(),
    title: z.string(),
    year: z.number(),
    url: z.string().optional().or(z.literal('')),
    authors: z.string().default('Prof. Dr. Tahar Abbou'),
    featured: z.boolean().default(false),
  }),
});

const conferences = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number().optional(),
    title: z.string(),
    year: z.number(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    code: z.string(),
    title: z.string(),
    level: z.string(),
    semester: z.string(),
    period: z.string(),
    department: z.string(),
    description: z.string(),
    resources: z.array(
      z.object({
        title: z.string(),
        file: z.string(),
        format: z.string().default('PDF'),
        type: z.string().default('Exam Preparation'),
      })
    ).default([]),
  }),
});

const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.string(),
    title: z.string(),
    event: z.string(),
    caption: z.string(),
  }),
});

const links = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    category: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  publications,
  conferences,
  courses,
  gallery,
  links,
};
