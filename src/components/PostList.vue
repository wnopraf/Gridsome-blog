<template>
  <Layout :show-logo="false">
    <div class="tag" v-if="tag">
      <span class="tag__name">{{tag.title}}</span>
      <a href class="retro-link" @click.prevent="$router.back()">&#128072; Back</a>
      <a href class="retro-link" @click="$router.push('/')">Daily posts</a>
    </div>
    <div class="posts">
      <PostInfo v-for="edge in posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    <div class="paginate">
      <Pager :info="posts.pageInfo" linkClass="retro-link"/>
    </div>
  </Layout>
</template>

<script>
import PostInfo from "./PostInfo.vue";
import { Pager } from "gridsome";
export default {
  props: ["posts", "tag"],
  components: {
    Pager,
    PostInfo
  },
  methods: {
    backToPosts() {
    console.log(this.$router, 'router')
    }
  }
};
</script>

<style lang="scss" >
.paginate {
  text-align: center;
}
.tag__name {
  display: inline-block;
    font-weight: 600;
    padding: 0.75rem;
    background-color: var(--tags-bg-color);
    margin-right: 1rem;
    color: white;
}
.retro-link {
    display: inline-block;
    padding: .6rem;
    margin: 0 .3rem;
    font-weight: 600;
    background-color: var(--links-bg-color);
    color: white;
    border-radius: 10px;
  }

</style>
