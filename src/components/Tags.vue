<template>
    <div class="post-view__tags" v-if="tags">
      <span>tags</span>
      <span class="post-view__tag" v-for="(tag,index) in tags" :key="index">
        <g-link :to="tag.path">{{tag.title}}</g-link>
      </span>
    </div>
</template>

<script>
export default {
    props: ['tags']
}
</script>

<style lang="scss" scoped>
.post-view__tags {
  span:first-child {
    text-transform: capitalize;
    font-weight: 900;
    margin-right: 1rem;
  }
  .post-view__tag a {
    display: inline-block;
    font-weight: 600;
    padding: 0.75rem;
    background-color: #4cc8f1;
    margin-right: 1rem;
    color: #4d4c4c;
  }
}
</style>

