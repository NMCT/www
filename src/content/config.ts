// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const moduleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    semester: z.number(),
    studycredits: z.number(),
    weight: z.number(),
    tags: z.array(z.string()).optional(),
    pillar: z.string(),
    tracks: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  programma: moduleCollection,
}
