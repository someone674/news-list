// vue.config.js
// 官方文档
// https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.my-app.com/my-app/
  // 那么将这个值改为 `/my-app/`
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，
  // 这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  publicPath: process.env.VUE_APP_BASEURL,
  devServer: {
    port: process.env.VUE_APP_PORT
  }

}
