(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},25:function(e,t,a){e.exports=a(66)},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(30),a(7)),i=a(8),o=a(10),u=a(9),m=a(11),d=a(67),h=a(68),v=a(22),f=(a(32),a(34),function(e){return r.a.createElement("div",{className:"footer text-center"},"Reena Mahapatra")}),E=(a(36),function(e){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"New York Times Article Scrubber"),r.a.createElement("h5",null,"Search for and annotate articles of interest!!"))}),p=(a(38),function(e){var t=function(t){var a=t.target.name;e.saveArticle(a),console.log("in result: ",a)};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"panel panel-primary"},r.a.createElement("div",{className:"panel-heading text-center"},"Results "),r.a.createElement("div",{className:"panel-body"},e.results.map(function(e,a){return r.a.createElement("div",{key:a,id:"result_"+(a+1),className:"imp"},r.a.createElement("a",{href:e.web_url},r.a.createElement("h4",null,e.headline.main)),r.a.createElement("p",null,"Date Published: ",e.pub_date),r.a.createElement("button",{name:a,className:"btn results btn-success",onClick:t},"Save"))})))))}),g=(a(14),function(e){var t=function(t){var a=t.target.name;e.removeArticle(a)};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"panel panel-primary"},r.a.createElement("div",{className:"panel-heading text-center"},"Saved Atricles "),r.a.createElement("div",{className:"panel-body"},e.saved.map(function(e,a){return r.a.createElement("div",{key:a,id:"result_"+(a+1),className:"imp"},r.a.createElement("a",{href:e.url},r.a.createElement("h4",null,e.topic)),r.a.createElement("p",null,"Date Published: ",e.date),r.a.createElement("button",{name:e._id,className:"btn btn-success",onClick:t},"Delete"))})))))}),b=(a(15),a(42),function(e){var t=e.children;return r.a.createElement("div",{className:"text-center"},t)}),N=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement(b,null,r.a.createElement("h3",null,"Search")),r.a.createElement("h5",{className:"text-center subheading"},"Topic"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",placeholder:"Enter a topic",className:"form-control",type:"text",id:"search"}),r.a.createElement("h5",{className:"text-center subheading"},"Start Year"),r.a.createElement("input",{value:e.startYear,onChange:e.handleInputChange,name:"startYear",placeholder:"Enter start year",className:"form-control",type:"text"}),r.a.createElement("h5",{className:"text-center subheading"},"End Year"),r.a.createElement("input",{value:e.endYear,onChange:e.handleInputChange,name:"endYear",placeholder:"Enter end year",className:"form-control",type:"text"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-success mt-3"},"Search")))},A=a(6),S=a.n(A),Y="https://api.nytimes.com/svc/search/v2/articlesearch.json",w={search:function(e,t,a){var n="?api-key=52977a9a9f5f40aa887630d28685ce04";return n+="&q="+e,parseInt(t)&&(n+="&begin_date="+t+"0101"),parseInt(a)&&(n+="&end_date="+a+"1231"),console.log("url",Y+n),S.a.get(Y+n)},saveArticle:function(e){var t={topic:e.headline.main,url:e.web_url,date:e.pub_date};return console.log("new article:",t),S.a.post("/api/SavedArticles",t)},savedArticle:function(){return S.a.get("/")},deleteArticle:function(e){return S.a.delete("/api/SavedArticles",{params:{id:e}})}},y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).saveArticle=function(e){w.saveArticle(a.state.articles[e]).then(function(e){a.getArticles(),console.log("entered save article",e)}),console.log("line 41: ",a.state.articles[e]._id)},a.getArticles=function(){w.savedArticle().then(function(e){console.log("line 45:",e),a.setState({filteredArticles:e.data}),console.log("filtered array:",a.state.filteredArticles)})},a.savedArticles=function(){w.savedArticle().then(function(e){e.data!==a.state.filteredArticles&&a.setState({filteredArticles:e.data})})},a.deleteArticle=function(e){w.deleteArticle(e).then(function(e){a.saveArticle()})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(v.a)({},t,n))},a.handleSearch=function(e){a.setState({search:e.target.value})},a.handleStartYear=function(e){a.setState({startYear:e.target.value})},a.handleEndYear=function(e){a.setState({endYear:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),a.clearArticles(),console.log("new state:",a.state.newState),a.searchResults(a.state.search,a.state.startYear,a.state.endYear)},a.state={filteredArticles:[],articles:[],search:"",startYear:"",endYear:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.searchResults(this.state.search,this.state.startYear,this.state.endYear)}},{key:"searchResults",value:function(e,t,a){var n=this;w.search(e,t,a).then(function(e){n.setState({articles:e.data.response.docs})}),console.log("Array1",this.state.articles)}},{key:"clearArticles",value:function(){this.setState({search:"",startYear:"",endYear:"",articles:{}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,{search:this.state.search,startYear:this.state.startYear,endYear:this.state.endYear,handleStartYear:this.handleStartYear,handleEndYear:this.handleEndYear,handleSearch:this.handleSearch,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row result-row"},this.state.articles.length?r.a.createElement(h.a,{render:function(){return r.a.createElement(p,{results:e.state.articles,saveArticle:e.saveArticle})}}):r.a.createElement("h5",{className:"text-center"},"No Articles to Display")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-10"},this.state.articles.length?r.a.createElement(h.a,{render:function(){return r.a.createElement(g,{saved:e.state.filteredArticles,removeArticle:e.removeArticle})}}):r.a.createElement("h5",{className:"text-center"},"No Saved Articles to Display"))))),r.a.createElement(f,null))}}]),t}(r.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",component:y}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.48ff1938.chunk.js.map