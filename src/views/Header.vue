<template>
  <div id="nav">
    <div class="nav-img">
      <img src="../assets/logo.png" class="logo_icon">
    </div>
    <div class="nav-menu">
      <el-menu mode="horizontal" class="menu">
        <el-menu-item index=""><a :href="this.url">首页</a></el-menu-item>
      </el-menu>
      <el-autocomplete
        class="inline-input"
        v-model="inputValue"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        @select="handleSelect"
        @keyup.enter.native="sendValue"
      ></el-autocomplete>
    </div>
    <div class="nav-login">
      <el-row v-if="this.$store.getters.login">
        <el-link type="info" @click="lougout">退出登录</el-link>
      </el-row>
      <el-row v-else>
        <el-button type="primary" round @click="goLogin(true)">登录</el-button>
        <el-button type="danger" round @click="goLogin(false)">注册</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      url: process.env.VUE_APP_BASEURL,
      restaurants: [],
      inputValue: '',
      timeout: null
    }
  },
  mounted () {
    this.loadHot()
    console.log('导航条挂载了')
  },
  updated () {
    console.log('导航条更新了')
  },
  computed: {
    logined () {
      return this.$store.getters.login
    }
  },
  watch: {
    logined: function (oldValue, newValue) {
      return newValue
    }
  },
  methods: {
    loadHot () {
      this.$http(this.$api.hotList).then((data) => {
        this.restaurants = data
      })
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createStateFilter (queryString) {
      return (inputValue) => {
        return (inputValue.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
      console.log(JSON.stringify(item))
      console.log(item.value)
    },
    sendValue () {
      console.log('ddd')
      console.log(this.inputValue)
    },
    // 退出登录
    lougout () {
      this.$store.dispatch('logout')
    },

    // 去登录页面
    goLogin (type) {
      this.$router.push({ path: '/login', query: { type: type } }).catch(() => {
        this.$notify({
          title: '警告',
          message: '您已登陆',
          type: 'warning'
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
  .baseWidth(@width: 500px) {
    width: @width;
  }
  #nav {
    border-bottom: 1px solid #e6e6e6;
    .flex-display(row, center);
    .nav-img {
      .baseWidth;
      padding-right: 50px;
      .logo_icon {
        width: 80px;
        float: right;
      }
    }
    .nav-menu {
      width: 750px;
      .flex-display(row, space-between);
      .menu {
        border-bottom: 0;
      }
    }
    .nav-login {
      .baseWidth;
      padding-left: 50px;
    }
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
