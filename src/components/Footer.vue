<template>
  <footer>
    Copyright {{ getCurrentYear }} by <a :href="href">{{ name }}</a>
  </footer>
</template>

<script>
export default {
  data: () => ({
    href: 'https://google.com',
    name: 'Google',
  }),
  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="css">
footer {
  text-align: center;
  color: green;
  letter-spacing: 0.5px;
  padding: 20px;
}
</style>