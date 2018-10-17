import React from "react";
// import "./SearchResult.css";

const Result = props => (
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <a href={props.url} rel="noopener noreferrer" target="_blank">
            <em>{props.title}</em>
          </a>
        </span>
        <span className="btn-group pull-right">
          <button
            className="btn btn-primary"
            onClick={() => props.handleSaveButton(props._id)}
          >
            Save
          </button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>
);

export default Result;
