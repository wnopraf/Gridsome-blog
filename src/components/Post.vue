<template>
  <div class="post">
    <div class="post__info">
      <img :src="post.avatar" alt>
      <span class="author">{{post.author}}</span>
      <span class="date">{{post.date}}</span>
    </div>
    <div class="slug">{{post.slug}}</div>
    <div class="content" v-html="post.content"></div>
    <div class="post__tags">
      <span v-for="(tag, index) in post.tags" :key="index" class="post__tag">
        <g-link :to="tag.path">{{tag.title}}</g-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

