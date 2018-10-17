import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "52977a9a9f5f40aa887630d28685ce04";
// const query = BASEURL + APIKEY + "&q=" + topic;
let API = {
  search: function(search, startYear, endYear) {
    let params = "?api-key=" + APIKEY;
    params += "&q=" + search;
    if (parseInt(startYear)) {
      params += "&begin_date=" + startYear + "0101";
    }
    if (parseInt(endYear)) {
      params += "&end_date=" + endYear + "1231";
    }
    console.log("url", BASEURL + params);
    return axios.get(BASEURL + params);
  },
  saveArticle: function(article) {
    return axios.post("api/save", article);
  },
  loadArticle: function() {
    return axios.get("/api/retrieve");
  },
  deleteArticle: function(id) {
    console.log("delete: ", id);
    return axios.delete(`/api/save/${id}`);
  }
};

export default API;
