<template>
  <div id="app">
    <Header v-show="$route.meta.showHeader"/>
    <router-view/>
  </div>
</template>
<script>
import Header from './views/Header'
export default {
  components: { Header }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
