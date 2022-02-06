<template>
  <div class="home">
    <Header class='header'/>
    <Content class="content"/>
    <Footer class='footer'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layout/header.vue'
import Content from '@/components/layout/content.vue'
import Footer from '@/components/layout/footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>