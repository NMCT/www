// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const moduleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    semester: z.number().optional(),
    studycredits: z.number().optional(),
    weight: z.number().optional(),
    tags: z.array(z.string()).optional(),
    pillar: z.string().optional(),
    tracks: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
  }),
})

const testimonialCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    company: z.string(),
    year: z.string(),
    avatar: z.string(),
    quote: z.string(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  programma: moduleCollection,
  testimonials: testimonialCollection,
}
