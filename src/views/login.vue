<template>
  <div class="login-backend">
    <div class="login-wrapper" v-if="toLogin">
      <el-input class="text-input"
        placeholder="手机号或邮箱"
        v-model="username"
        prefix-icon="el-icon-user-solid"
        clearable>
      </el-input>
      <el-input class="text-input"
        placeholder="请输入密码"
        v-model="password"
        type="password"
        prefix-icon="el-icon-view">
      </el-input>
      <el-button type="primary" round class="login-button" @click="login">登录</el-button>
      <div class="divider">
        <div class="line"></div>
        <span class="txt">社交账号登录</span>
        <div class="line"></div>
      </div>
      <div class="other-account">
        <img src="../assets/icon/weibo.jpg" class="account-icon">
        <img src="../assets/icon/weixin.jpg" class="account-icon">
      </div>
    </div>
    <div class="login-wrapper" v-else>
      <el-input class="text-input"
                placeholder="你的昵称"
                v-model="nickname"
                prefix-icon="el-icon-user-solid"
                clearable>
      </el-input>
      <el-input class="text-input"
                placeholder="手机号"
                v-model="phone"
                prefix-icon="el-icon-user-solid"
                clearable>
      </el-input>
      <el-input class="text-input"
                placeholder="手机验证码"
                v-model="verifiCode"
                prefix-icon="el-icon-user-solid"
                clearable>
        <el-button slot="append">发送验证码</el-button>
      </el-input>
      <el-input class="text-input"
                placeholder="设置密码"
                v-model="password"
                type="password"
                prefix-icon="el-icon-view">
      </el-input>
      <el-button type="success" round class="login-button">注册</el-button>
      <el-link type="success" class="login-tip" @click="changeType">已有账号？去登陆</el-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      toLogin: false,
      username: '',
      password: '',
      nickname: '',
      phone: '',
      verifiCode: ''
    }
  },
  mounted () {
    this.toLogin = this.$route.query.type
  },
  updated () {
  },
  computed: {
  },
  methods: {
    login () {
      // 这里是需要请求后台进行验证，然后根据结果是否登陆成功。
      this.$store.dispatch('login/login')
      this.$router.push({ path: '/' })
    },
    changeType () {
      this.toLogin = !this.toLogin
    }
  }
}
</script>

<style scoped lang="less">
  .login-backend {
    .flex-display();
    width: 100%;
    height: 100%;
    padding-top: 200px;
    .login-wrapper {
      width: 300px;
      height: 350px;
      padding: 20px 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .20);
      .text-input{
        margin-bottom: 10px;
      }
      .login-button{
        margin-top: 50px;
        width: 100%;
      }
      .divider{
        .flex-display(row);
        margin-top: 40px;
        .line{
          width: 50px;
          border-top: 1px solid #878787;
        }
        .txt{
          margin: 0 10px;
          color: #878787;
          font-size: 14px;
          font-family: Helvetica Neue;
          line-height: 1.5;
        }
      }
      .other-account{
        .flex-display(row);
        .account-icon{
          width: 60px;
        }
      }
      .login-tip{
        margin-top: 10px;
        float: right;
      }
    }
  }
</style>
