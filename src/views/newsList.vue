<template>
  <div class="news-wrapper">
    <div class="news-item" v-for="news in newsArray" :key="news.id">
      <div class="content-wapper">
        <div class="title">
          {{news.title}}
        </div>
        <div class="summary">
          {{news.summary}}
        </div>
      </div>
      <div class="img-wapper">
        <img :src="news.cover" class="img-avatar"/>
      </div>
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
      let _this = this
      this.$axios.get('https://unidemo.dcloud.net.cn/api/news')
        .then(function (response) {
          console.log(response.data)
          _this.newsArray = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

}

</script>

<style scoped lang="less">

  .news-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .news-item{
    width: 630px;
    margin: 10px 0;
    border: 1px solid #f0f0f0;
    padding: 10px 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .content-wapper{
      height: 100px;
      display: flex;
      flex-direction: column;
      padding: 0 10px;

      .title{
        width: 440px;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 5px;
      }

      .summary{
        width: 440px;
        font-size: 14px;
        font-weight: 300;
        color: #878787;
        margin-bottom: 5px;
      }
    }

    .img-avatar{
      width: 150px;
    }

  }

</style>
