import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
        source: z.string(),
        organization: z.string(),
        repostedDate: z.string(),
        sourcePublishDate: z.string(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        summary: z.string().optional()
      })
    })
  }
})
