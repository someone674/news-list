<template>
  <div>
      登录页面
      <input type="text" placeholder="请输入用户名" v-model="username"/>
      <input type="password" placeholder="请输入密码" v-model="password"/>
      <input type="button" value="登录" @click="login"/>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted: () => {
    console.log('dd')
  },
  computed: {
    logined () {
      return this.$store.getters.login
    }
  },
  methods: {
    login () {
      localStorage.setItem('logined', true)
      this.$store.dispatch('login')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>
