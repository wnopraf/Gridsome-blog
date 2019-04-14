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
    display: inline-block;
    padding: .35rem;
    background: var(--links-bg-color);
    color: white;
  }
  .post-view__tag a {
    display: inline-block;
    font-weight: 600;
    padding: 0.35rem;
    background-color: var(--tags-bg-color);
    margin-right: 1rem;
    color: white;
  }
}
</style>

