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
}
</style>
