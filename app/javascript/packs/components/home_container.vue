<template>
  <div id="home-container">
    <ul>
      <li v-for="article in $store.state.articles" :key="article.id">
        <router-link :to="{ name : 'Article', params: { id: article.id }}">
          <div>{{article.title}}</div>
        </router-link>
        <div>{{article.body}}</div>
        <div>{{article.user.email}}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch("fetchArticles")
    })
  }
})
</script>

<style lang="scss" scoped>
ul {
  li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
