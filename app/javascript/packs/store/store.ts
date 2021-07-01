import { createStore } from 'vuex'
import axios from 'axios';

export const store = createStore({
  state: {
    articles: [],
    article: { user: {} },
  },
  mutations: {
    setArticles(state, resData) {
      state.articles = resData
    },
    setArticle(state, resData) {
      state.article = resData
    }
  },
  actions: {
    async fetchArticles(context) {
      await axios.get("/api/v1/articles")
        .then((response) => {
          context.commit("setArticles", response.data)
        })
        .catch(() => {
          alert("エラー");
        });
    },
    async fetchArticle(context, user_id) {
      await axios.get(`/api/v1/articles/${user_id}`)
        .then((response) => {
          context.commit("setArticle", response.data)
        })
        .catch(() => {
          alert("エラー");
        });
    },
  },
})
