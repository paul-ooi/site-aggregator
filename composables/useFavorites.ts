// import { onMounted } from 'vue'
// import type { Ref } from 'vue'
// import type { Article, FavoriteArticle } from '../../types/article'

// interface UseFavoritesReturn {
//   favorites: Readonly<Ref<FavoriteArticle[]>>
//   saveFavorite: (article: Article) => void
//   removeFavorite: (articleId: string) => void
// }

// export const useFavorites = (): UseFavoritesReturn => {
//   const favorites = useState<FavoriteArticle[]>('favorites', () => [])

//   const saveFavorite = (article: Article): void => {
//     const favorite: FavoriteArticle = {
//       ...article,
//       addedAt: new Date().toISOString(),
//       userTags: []
//     }
//     favorites.value = [favorite, ...favorites.value]
//     // Sync with localStorage
//     localStorage.setItem('favorites', JSON.stringify(favorites.value))
//   }

//   const removeFavorite = (articleId: string): void => {
//     favorites.value = favorites.value.filter(f => f.id !== articleId)
//     localStorage.setItem('favorites', JSON.stringify(favorites.value))
//   }

//   // Initialize from localStorage
//   onMounted(() => {
//     const stored = localStorage.getItem('favorites')
//     if (stored) {
//       favorites.value = JSON.parse(stored) as FavoriteArticle[]
//     }
//   })

//   return <UseFavoritesReturn> {
//     favorites: favorites,
//     saveFavorite,
//     removeFavorite
//   }
// }
