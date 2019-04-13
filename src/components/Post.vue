<template>
  <div class="post">
    <div class="post__info">
      <img :src="post.avatar" alt>
      <span class="author">{{post.author}}</span>
      <span class="date">{{post.date}}</span>
    </div>
    <Tags :tags="post.tags" />
    <h1 class="slug">{{post.slug}}</h1>
    <div class="content" v-html="post.content"></div>
    
  </div>
</template>

<script>
import Tags from './Tags.vue'
export default {
  props: ["post"],
  components: {
    Tags
  }
};
</script>

