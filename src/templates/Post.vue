<template>
  <Layout>
    <a href class="retro-link" @click.prevent="$router.back()">&#128072; Back</a>
    <Post :post="this.$page.post"/>
  </Layout>
</template>

<script>
import Post from "~/components/Post.vue";
export default {
  components: {
    Post
  },
  methods: {
    log: console.log
  }
};
</script>

<page-query>
  query post($id: String){
    post(id: $id) {
      slug
      author
      avatar
      date
      content
      tags {
        title
        path
      }
    }
}
</page-query>