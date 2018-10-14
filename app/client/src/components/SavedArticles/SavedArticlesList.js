import React from "react";
import "./SavedArticles.css";

const SavedArticleList = props => (
  <li className="list-group-item">{props.children}</li>
);
export default SavedArticleList;
