import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    // "featured" projects render wider in the asymmetric grid
    featured: z.boolean().default(false),
    // optional link fields — omit any that don't apply to a given project
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    // if set, the project card will fetch live star/commit counts from this repo
    githubRepo: z.string().optional(), // format: "owner/repo"
    // path or URL to a real screenshot/photo for this project
    image: z.string().optional(),
    // set true to reserve a "photo coming soon" slot on the card when there's no image yet
    imagePending: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    location: z.string().optional(),
    startDate: z.string(), // e.g. "Aug 2024"
    endDate: z.string().default('Present'),
    order: z.number().default(0), // lower = more recent, controls sort
    // path or URL to a real photo for this role
    image: z.string().optional(),
    // set true to reserve a "photo coming soon" slot when there's no image yet
    imagePending: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };
