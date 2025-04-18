// export class LocalStorageManager {
//     constructor(storageKey = 'site-aggregator') {
//       this.storageKey = storageKey;
//     }
  
//     saveFavorite(article) {
//       const favorites = this.getFavorites();
//       favorites.unshift({
//         id: article.id,
//         title: article.title,
//         addedAt: new Date().toISOString(),
//         tags: []
//       });
//       localStorage.setItem(`${this.storageKey}_favorites`, JSON.stringify(favorites));
//     }
  
//     getFavorites() {
//       return JSON.parse(localStorage.getItem(`${this.storageKey}_favorites`) || '[]');
//     }
//   }