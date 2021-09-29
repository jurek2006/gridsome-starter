<template>
  <Layout>
    <h1>Blog {{ getData }}</h1>
    <article v-for="edge in $page.allPost.edges" :key="edge.node.id">
      <!-- <div v-html="edge.node.content"></div> -->
      <g-image :src="edge.node.cover_image" style="width: 100%" />
      <h2>{{ edge.node.title }}</h2>
      <p>{{ edge.node.excerpt }}</p>
      <p>Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min read</p>
      <div>
        <g-link v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path" style="padding-right: 0.25em"
          >#{{ tag.id }}</g-link
        >
      </div>
      <g-link :to="edge.node.path">Read post</g-link>
    </article>
    <Pager :info="$page.allPost.pageInfo" link-class="pager" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost(perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        date(format: "D.MM.YYYY")
        tags {
          id
          path
        }
        content
        timeToRead
        path
        cover_image(width: 1000, height: 300)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  components: { Pager },
}
</script>

<style scoped>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>
