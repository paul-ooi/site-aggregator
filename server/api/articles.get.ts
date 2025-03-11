import type { Article } from '~/types/article'
const articles: Article[] = [
    {
        id: '1',
        title: 'Article 1',
        content: 'Content 1',
        url: 'https://example.com',
        source: 'Example',
        organitzation: 'Example',
        repostedDate: '2022-02-02T02:02:02Z',
        sourcePublishDate: '2022-02-02T02:02:02Z',
    },
    {
        id: '2',
        title: 'Article 2',
        content: 'Content 2',
        url: 'https://example.com',
        source: 'Example',
        organitzation: 'Example',
        repostedDate: '2022-02-02T02:02:02Z',
        sourcePublishDate: '2022-02-02T02:02:02Z',
    }
]
export default defineEventHandler(() => {
    return articles;
})