import React from "react";
// import "./SavedArticles.css";

const SavedArticles = props => (
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
            onClick={() => props.handleDeleteButton(props._id)}
          >
            Delete
          </button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>
);
export default SavedArticles;
