<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  mounted: function () {
    // console.log(process.env.VUE_APP_BASEURL)
  },
  components: {
    HelloWorld
  }
}
</script>
