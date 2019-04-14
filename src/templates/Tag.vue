<template>   
    <PostList :posts="this.$page.tag.belongsTo" :tag="this.$page.tag" />  
</template>

<script>
import PostList from '~/components/PostList'
export default {
    components: {
        PostList
    }
}
</script>


<page-query>
query ($id: String ,$page: Int) {
    tag (id: $id) {
      title
      belongsTo(perPage: 5 page: $page) @paginate {
        pageInfo {
            currentPage
            totalPages
        }
        edges {
      
       node {
        ...on Post {
          excerpt
          date
          path
          avatar
          author
          slug
        }
      }   
      }
       
    }
    }
}


</page-query>