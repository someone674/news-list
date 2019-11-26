<template>
  <div class="content-wapper">
    <div class="content-wapper-div">
      <span v-html="content"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.content = this.$route.query.content
    }
  }

}
</script>

<style scoped>
  .content-wapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content-wapper-div {
    width: 750px;
  }
  .content-wapper-div >>> p {
    text-align: left;
  }
  .content-wapper-div >>> img {
    width: 750px;
  }
</style>
