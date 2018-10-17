import React from "react";
import moment from "moment";
import Jumbotron from "../src/components/Jumbotron";
import SearchForm from "../src/components/SearchForm";
import Result from "../src/components/Result";
import SavedArticles from "../src/components/SavedArticles";
import API from "../src/utils/API";

class MainArticle extends React.Component {
  state = {
    dbArticles: [],
    articles: [],
    search: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.getLoadArticle();
  }

  getLoadArticle = () => {
    API.loadArticle()
      .then(res =>
        this.setState({
          dbArticles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  renderSearchArticles = () => {
    return this.state.articles.map(article => (
      <Result
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={moment(article.pub_date).format("YYYY-MM-DD")}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        loadArticle={this.getLoadArticle}
      />
    ));
  };

  renderSavedArticles = () => {
    console.log("dbArticles: ", this.state.dbArticles);
    return this.state.dbArticles.map(article => (
      <SavedArticles
        _id={article._id}
        key={article._id}
        title={article.title}
        date={moment(article.date).format("YYYY-MM-DD")}
        url={article.url}
        handleDeleteButton={this.handleDeleteButton}
        loadArticle={this.getLoadArticle}
      />
    ));
  };

  handleSearch = event => {
    this.setState({ search: event.target.value });
  };
  handleStartYear = event => {
    this.setState({ startYear: event.target.value });
  };
  handleEndYear = event => {
    this.setState({ endYear: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(
      this.state.search,
      this.state.startYear,
      this.state.endYear
    ).then(res => {
      this.setState({ articles: res.data.response.docs.slice(0, 5) });
    });
    console.log("Array: ", this.state.articles);
  };

  handleSaveButton = id => {
    const toSaveArticle = this.state.articles.find(article => article._id);
    console.log("toSaveArticle: ", toSaveArticle);
    const newSave = {
      title: toSaveArticle.headline.main,
      date: toSaveArticle.pub_date,
      url: toSaveArticle.web_url
    };
    API.saveArticle(newSave).then(this.getLoadArticle());
  };

  handleDeleteButton = id => {
    API.deleteArticle(id).then(this.getLoadArticle());
  };

  render() {
    return (
      <div className="container">
        <div className="container-fluid">
          <Jumbotron />
          <SearchForm
            handleSearch={this.handleSearch}
            handleStartYear={this.handleStartYear}
            handleEndYear={this.handleEndYear}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>
                      <i className="far fa-newspaper" />
                      <i className="fa fa-newspaper" aria-hidden="true" />
                      Search Result
                    </strong>
                    {/* <strong>Search Result</strong> */}
                  </h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group">{this.renderSearchArticles()}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>Saved Articles</strong>
                  </h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group">{this.renderSavedArticles()}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p className="text-center mt-5">
            New York Times Scrubber Built using React.js
          </p>
        </footer>
      </div>
    );
  }
}
export default MainArticle;
