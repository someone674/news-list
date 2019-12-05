<template>
  <div class="news-wrapper" v-loading="loading" element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <div class="news-item" v-for="news in newsArray" :key="news.id">
      <div class="content-wapper">
        <div class="title" @click="goDetail(news.id)"><span>{{ news.title }}</span></div>
        <div class="summary">{{ news.summary }}</div>
        <div class="author-info-wapper">
          <img :src="news.author_avatar" class="author-avatar"/>
          <span class="author-name">{{news.author_name}}</span>
          <span class="published-at">{{news.published_at}}</span>
        </div>
      </div>
      <div class="img-wapper" @click="goDetail(news.id)"><img :src="news.cover" class="img-avatar" /></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'newsList',
  data () {
    return {
      newsArray: [],
      loading: true
    }
  },
  created () {
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get(this.$api.newsList).then(data => {
        console.log(data)
        this.newsArray = data
      })
      this.loading = false
    },
    goDetail (id) {
      this.$router.push({ path: '/detail', query: { id: id } }).catch(() => {
        this.$notify({
          title: '警告',
          message: '访问错误',
          type: 'warning'
        })
      })
    //  实现新窗口打开
    //   let routerUrl = this.$router.resolve({
    //     path: '/detail',
    //     query: { id: id }
    //   })
    //   window.open(routerUrl.href, '_blank')
    }
  }
}
</script>

<style scoped lang="less">

.baseWidth (@d: 550px) {
  width: @d;
}

.news-wrapper {
  .flex-display;
  .news-item {
    width: 750px;
    margin: 5px 0;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 10px;
    .flex-display(row, space-between);
    align-content: flex-start;

    .content-wapper {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      .title {
        .baseWidth;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 5px;
        max-height: 55px;
        overflow: hidden;
        cursor:pointer;
      }
      .title span:hover{
        border-bottom: #000000 2px solid;
      }
      .summary {
        .baseWidth;
        font-size: 14px;
        font-weight: 300;
        color: #878787;
        margin-bottom: 5px;
        max-height: 40px;
        overflow: hidden;
      }
      .author-info-wapper{
        .baseWidth;
        max-height: 40px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        .flex-display(row, flex-start);
        .author-avatar{
          width: 30px;
          height: 30px;
          border-radius: 15px;
          margin-right: 20px;
        }
        .author-name{
          color: #000000;
          margin-right: 20px;
        }
        .published-at{
          color: #878787;
          margin-right: 20px;
        }
      }
    }
    .img-wapper {
      align-items: center;
       .img-avatar {
         width: 150px;
         cursor:pointer;
       }
    }
  }
}
</style>
