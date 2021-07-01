<template>
  <div id="article-container">
    <div>投稿者：{{ $store.state.article.user.name }}</div>
    <div>タイトル：{{ $store.state.article.title }}</div>
    <div>内容：{{ $store.state.article.body }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();
    onMounted(async () => {
      await store.dispatch("fetchArticle", route.params.id);
    });
  },
});
</script>
