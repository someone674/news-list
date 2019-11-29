const baseUrl = 'http://localhost:' + process.env.VUE_APP_PORT + process.env.VUE_APP_BASEURL
const newsList = baseUrl + '/api/newsList.json'
const newsDetail = baseUrl + '/api/1/detail.json'

export default {
  newsList,
  newsDetail
}
