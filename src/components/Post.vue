<template>
  <div class="post">
    <div class="post__author">
      <div class="post__author__wrapper">
        <img :src="post.avatar" alt>
        <span class="author">{{post.author}}</span>
      </div>
    </div>
    <div class="post__slug">
      <h1 class="slug">{{post.slug}}</h1>
      <span class="date">{{post.date}}</span>
    </div>

    <Tags :tags="post.tags"/>

    <div class="content" v-html="post.content"></div>
  </div>
</template>

<script>
import Tags from "./Tags.vue";
export default {
  props: ["post"],
  components: {
    Tags
  }
};
</script>

<style lang="scss" scoped>
.post__author {
  display: flex;
  justify-content: center;
  align-items: center;
  .post__author__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 100px;
    margin-bottom: 1rem;
    border-radius: 50%;
  }
}
.post__slug {
  margin-bottom: 2rem;
}
</style>

