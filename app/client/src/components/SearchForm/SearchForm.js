import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-search" aria-hidden="true" /> Search
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <br />
                <input
                  value={props.search}
                  onChange={props.handleSearch}
                  type="text"
                  className="form-control mt-3"
                  id="search"
                  // aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year</label>
                <br />
                <input
                  value={props.startYear}
                  onChange={props.handleStartYear}
                  type="text"
                  className="form-control mt-3"
                  id="start-year"
                />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year</label>
                <br />
                <input
                  value={props.endYear}
                  onChange={props.handleEndYear}
                  type="text"
                  className="form-control mt-3"
                  id="end-year"
                />
              </div>
              <button
                onClick={props.handleFormSubmit}
                type="submit"
                className="btn btn-primary search mt-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true" /> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">{props.renderSearchArticles()}</div>
        </div>
      </div>
    </div>
    <br />
    <br /> */}
  </div>
);

export default SearchForm;
