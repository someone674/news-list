<template>
  <div class="news-wrapper">
    <div class="news-item" v-for="news in newsArray" :key="news.id">
      <div class="content-wapper">
        <div class="title" @click="goDetail(news.content)"><span>{{ news.title }}</span></div>
        <div class="summary">{{ news.summary }}</div>
        <div class="author-info-wapper">
          <img :src="news.author_avatar" class="author-avatar"/>
          <span class="author-name">{{news.author_name}}</span>
          <span class="published-at">{{news.published_at}}</span>
        </div>
      </div>
      <div class="img-wapper" @click="goDetail(news.content)"><img :src="news.cover" class="img-avatar" /></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'newsList',
  data () {
    return {
      newsArray: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$get('https://unidemo.dcloud.net.cn/api/news').then((resp) => {
        this.newsArray = resp
      })
    },
    goDetail (content) {
      // this.$router.push({ path: '/detail', query: { content: content } })
    //  实现新窗口打开
      let routerUrl = this.$router.resolve({
        path: '/detail',
        query: { content: content }
      })
      window.open(routerUrl.href, '_blank')
    }
  }
}
</script>

<style scoped lang="less">

.flex-display (@dir: column, @content: center) {
  display: flex;
  flex-direction: @dir;
  justify-content: @content;
  align-items: center;
}

.news-wrapper {
  .flex-display;
  .news-item {
    width: 630px;
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
        width: 440px;
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
        width: 440px;
        font-size: 14px;
        font-weight: 300;
        color: #878787;
        margin-bottom: 5px;
        max-height: 40px;
        overflow: hidden;
      }
      .author-info-wapper{
        width: 440px;
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
