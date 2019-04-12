<template>
    <PostList :posts="this.$page.posts" /> 
</template>

<page-query>
query ($page: Int){
  posts: allPost(perPage: 5 page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        path
        avatar
        author
        slug
        excerpt
        tags {
          id
          title
          path
        }
        date
        
      }
    }
  }
}
</page-query>

<script>

import PostList from '~/components/PostList.vue'

export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
