<template>
  <div>
      <div class="header_father">
          <Header class="header"></Header>
      </div>
      <div>
          <router-view />
      </div>
      <div>
          <right-nav class="tight_nav"></right-nav>
      </div>
      <div>
          <Footer></Footer>
      </div>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import rightNav from './components/rightNav'
export default {
    components: { Header, Footer, rightNav },
    mounted() {
    }
}
</script>

<style lang='scss' scoped>
.header_father{
    height: 74px;
    .header{
        position: fixed;
    }
}
.tight_nav{
    position: fixed;
    right: 0;
    top: 40%;
    z-index: 999;
}
</style>