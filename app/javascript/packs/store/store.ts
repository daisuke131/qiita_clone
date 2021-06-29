import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import axios from 'axios';

export interface State {
  articles: Array<any>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    articles: []
  },
  mutations: {
    setArticles(state, resData)
    {
      state.articles = resData
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
    }
  },
})

// 独自の `useStore` 関数を定義します
export function useStore () {
  return baseUseStore(key)
}
