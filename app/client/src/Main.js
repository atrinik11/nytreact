import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Result from "./components/Result";
import SavedArticles from "./components/SavedArticles";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import { Route, Link } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredArticles: [],
      articles: [],
      search: "",
      startYear: "",
      endYear: ""
    };
  }
  componentDidMount() {
    this.searchResults(
      this.state.search,
      this.state.startYear,
      this.state.endYear
    );
    // this.savedArticles();
  }
  saveArticle = index => {
    // event.preventDefault();
    API.saveArticle(this.state.articles[index]).then(response => {
      this.getArticles();
      console.log("entered save article", response);
    });
    console.log("line 41: ", this.state.articles[index]._id);
  };
  getArticles = () => {
    API.savedArticle().then(response => {
      console.log("line 45:", response);
      this.setState({ filteredArticles: response.data });
      console.log("filtered array:", this.state.filteredArticles);
    });
  };
  savedArticles = () => {
    API.savedArticle().then(response => {
      if (response.data !== this.state.filteredArticles) {
        this.setState({ filteredArticles: response.data });
      }
    });
  };

  searchResults(search, startYear, endYear) {
    API.search(search, startYear, endYear).then(response => {
      this.setState({ articles: response.data.response.docs });
    });
    console.log("Array1", this.state.articles);
  }

  deleteArticle = id => {
    API.deleteArticle(id).then(response => {
      this.saveArticle();
    });
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
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

  clearArticles() {
    let newState = {
      search: "",
      startYear: "",
      endYear: "",
      articles: {}
    };
    this.setState(newState);
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.clearArticles();
    console.log("new state:", this.state.newState);
    this.searchResults(
      this.state.search,
      this.state.startYear,
      this.state.endYear
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron />
        <div className="container">
          <div className="row">
            <SearchForm
              search={this.state.search}
              startYear={this.state.startYear}
              endYear={this.state.endYear}
              handleStartYear={this.handleStartYear}
              handleEndYear={this.handleEndYear}
              handleSearch={this.handleSearch}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="row result-row">
              {!this.state.articles.length ? (
                <h5 className="text-center">No Articles to Display</h5>
              ) : (
                <Route
                  render={() => (
                    <Result
                      results={this.state.articles}
                      saveArticle={this.saveArticle}
                    />
                  )}
                />
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-md-10">
                {!this.state.articles.length ? (
                  <h5 className="text-center">No Saved Articles to Display</h5>
                ) : (
                  <Route
                    //Rendering the saved articles from the db
                    render={() => (
                      <SavedArticles
                        saved={this.state.filteredArticles}
                        removeArticle={this.removeArticle}
                      />
                    )}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Main;
