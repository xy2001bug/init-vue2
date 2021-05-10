<template>
  <div>
      <div>
          <Header></Header>
      </div>
      <div>
          <router-view />
      </div>
      <div>
          <Footer></Footer>
      </div>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
    components: { Header, Footer }
}
</script>

<style>

</style>