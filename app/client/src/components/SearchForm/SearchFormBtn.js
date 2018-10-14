import React from "react";
import "./SearchForm.css";

const SearchFormBtn = props => (
  <button {...props} className="btn btn-success mt-3">
    {props.children}
  </button>
);

export default SearchFormBtn;
