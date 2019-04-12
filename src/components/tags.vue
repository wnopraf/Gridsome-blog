<template>
    <div class="post-view__tags" >
      <span>tags</span>
      <span class="post-view__tag">
        <g-link :to="tag.path">{{tag.title}}</g-link>
      </span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>

