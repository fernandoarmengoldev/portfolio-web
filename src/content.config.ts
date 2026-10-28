import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      translationKey: z.string(),
      locale: z.enum(['es', 'en']),
      summary: z.string(),
      longDescription: z.string(),
      image: image(),
      imageAlt: z.string(),
      technologies: z.array(z.string()),
      githubUrl: z.url().optional(),
      demoUrl: z.url().optional(),
      featured: z.boolean(),
      order: z.number().int(),
      year: z.string(),
      status: z.string(),
      challenges: z.array(z.string()),
      solutions: z.array(z.string()),
      results: z.array(z.string()),
      technicalDecisions: z.array(z.string()),
    }),
});

export const collections = { projects };
