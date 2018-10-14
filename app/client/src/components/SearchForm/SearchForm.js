import React from "react";
import "./SearchForm.css";
import Header from "../Header";
import "./SearchFormBtn";

const SearchForm = props => (
  <form>
    <div className="form-group">
      <Header>
        <h3>Search</h3>
      </Header>
      <h5 className="text-center subheading">Topic</h5>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        placeholder="Enter a topic"
        className="form-control"
        type="text"
        id="search"
      />
      <h5 className="text-center subheading">Start Year</h5>
      <input
        value={props.startYear}
        onChange={props.handleInputChange}
        name="startYear"
        placeholder="Enter start year"
        className="form-control"
        type="text"
      />
      <h5 className="text-center subheading">End Year</h5>
      <input
        value={props.endYear}
        onChange={props.handleInputChange}
        name="endYear"
        placeholder="Enter end year"
        className="form-control"
        type="text"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-success mt-3">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
