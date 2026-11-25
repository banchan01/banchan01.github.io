import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().optional(),
    draft: z.boolean().optional().default(false),
    order: z.number().default(0),
  }),
});


const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    date: z.string(),
    website: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

// Korean translations. File names match the English entries;
// fields left out fall back to the English version.
const projectsKo = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const experienceKo = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string().optional(),
    organization: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  projects,
  experience,
  'projects-ko': projectsKo,
  'experience-ko': experienceKo,
};
