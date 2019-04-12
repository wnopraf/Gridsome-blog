<template>
  <Layout :show-logo="false">
    <div class="tag" v-if="tag">
      {{tag.title}}
      <a href @click.prevent="$router.back()">&#128072; Back</a>
      <a href="" @click="$router.push('/')">Daily posts</a>
    </div>
    <div class="posts">
      <PostInfo v-for="edge in posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    <div class="paginate">
      <Pager :info="posts.pageInfo"/>
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
  a {
    display: inline-block;
    padding: .6rem;
    margin: 0 .3rem;
    font-weight: 600;
    background-color: rgb(243, 173, 45);
    color: white;
  }
}
</style>
