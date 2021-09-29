<template>
  <Layout>
    <div v-html="$page.post.content" />
    <Disqus :identifier="$page.post.id" />
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post(path: $path) {
    title
    id
    content
  }
}
</page-query>
