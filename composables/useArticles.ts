import { ref, readonly, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { Article } from '../types/article'

interface UseArticlesReturn {
  articles: Readonly<Ref<Article[]>>
  loading: Readonly<Ref<boolean>>
  fetchArticles: () => Promise<void>
}

export const useArticles = (): UseArticlesReturn => {
  const articles = ref<Article[]>([])
  const loading = ref<boolean>(true)

  const fetchArticles = async (): Promise<void> => {
    loading.value = true
    try {
      articles.value = await $fetch<Article[]>('/api/articles')
    } catch (error) {
      console.error('Failed to fetch articles:', error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchArticles()
  })

  return <UseArticlesReturn> {
    articles: articles,
    loading: loading,
    fetchArticles
  }
}