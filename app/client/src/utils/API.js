import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "52977a9a9f5f40aa887630d28685ce04";
// const query = BASEURL + APIKEY + "&q=" + topic;
const API = {
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
    let newArticle = {
      topic: article.headline.main,
      url: article.web_url,
      date: article.pub_date
    };
    console.log("new article:", newArticle);
    return axios.post("/api/SavedArticles", newArticle);
  },
  savedArticle: function() {
    return axios.get("/");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/SavedArticles", { params: { id: id } });
  }
};

export default API;
