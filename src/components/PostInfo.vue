<template>
  <div class="post-view">
    <div class="post-info">
      <div class="post-info__avatar">
        <img :src="post.avatar" alt>
      </div>
      <div class="post-info__author">{{post.author}}</div>
    </div>
    <div class="post-view__date">{{post.date}}</div>
    <h3 class="post-view__slug">{{post.slug}}</h3>
    <p class="post-view__excerpt">{{post.excerpt}}</p>
    <Tags :tags="post.tags"/>
    <g-link :to="post.path" class="post-view__link">view post</g-link>
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
.post-view {
  margin: 2rem 0;
  background: #fefff9;
  padding: 1rem;
  border: 1px solid var(--contrast-main-color);
  border-radius: 15px;
}
.post-info {
  display: flex;
  align-items: center;
  .post-info__avatar {
    max-width: 75px;
    margin-right: 1rem;
  }
}
.post-view__date {
  font-size: 0.5em;
}
.post-view__slug {
  margin: 1rem 0;
}
.post-view__tags {
  span:first-child {
    text-transform: capitalize;
    font-weight: 900;
    margin-right: 1rem;
  }
  .post-view__tag a {
    font-weight: 600;
    padding: 0.75rem;
    background-color: #4cc8f1;
    margin-right: 1rem;
    color: #4d4c4c;
  }
}
.post-view__link {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.6rem;
  border-radius: 25px;
  background-color: rgb(44, 181, 123);
  color: white;
  font-weight: 600;
  transition: background-color 0.5s;
  &:hover {
    background-color: rgb(2, 168, 91);
    opacity: 1;
  }
}
</style>
