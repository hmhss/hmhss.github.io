import { defineCollection, z } from 'astro:content';

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Exam', 'Holiday', 'Event', 'General']),
    pinned: z.boolean().default(false),
    summary: z.string(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    summary: z.string(),
    coverImage: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const alumni = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    graduationYear: z.number(),
    currentRole: z.string(),
    location: z.string().optional(),
    summary: z.string(),
    photo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  announcements,
  blog,
  alumni,
};
