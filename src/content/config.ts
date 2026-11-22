import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['ar', 'en', 'fr']).default('ar'),
    authors: z.string().default('Pr. Tahar Abbou'),
    type: z.enum(['journal', 'chapter', 'book', 'proceeding']).default('journal'),
    journal: z.string(),
    year: z.number(),
    volume_pages: z.string().optional(),
    doi_url: z.string().url().optional().or(z.literal('')),
    pdf_file: z.string().optional().or(z.literal('')),
    featured: z.boolean().default(false),
  }),
});

const conferences = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    conference_name: z.string(),
    scope: z.enum(['international', 'national']).default('international'),
    location: z.string(),
    date: z.string().or(z.date()),
    role: z.enum(['presenter', 'keynote', 'committee', 'chair']).default('presenter'),
    lang: z.enum(['ar', 'en', 'fr']).default('ar'),
    file: z.string().optional().or(z.literal('')),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    level: z.string(),
    semester: z.string(),
    academic_year: z.string(),
    lang: z.enum(['ar', 'en', 'fr']).default('ar'),
    access_mode: z.enum(['public', 'protected']).default('public'),
    passcode: z.string().optional(),
    syllabus: z.string().optional(),
    lessons: z.array(
      z.object({
        lesson_num: z.number(),
        lesson_title: z.string(),
        lesson_date: z.string().optional(),
        summary: z.string().optional(),
        file_url: z.string(),
      })
    ).default([]),
  }),
});

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    category: z.enum(['students', 'cfp', 'defense', 'general']).default('general'),
    lang: z.enum(['ar', 'en', 'fr']).default('ar'),
    attachment: z.string().optional().or(z.literal('')),
  }),
});

const activities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    role: z.string(),
    period: z.string(),
    lang: z.enum(['ar', 'en', 'fr']).default('ar'),
  }),
});

const prizes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    year: z.number(),
    lang: z.enum(['ar', 'en', 'fr']).default('ar'),
    image: z.string().optional(),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.string().optional(),
    photo: z.string(),
  }),
});

const links = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    category: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  publications,
  conferences,
  courses,
  announcements,
  activities,
  prizes,
  photos,
  links,
};
