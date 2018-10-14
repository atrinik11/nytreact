import React from "react";
import "./Result.css";

const ResultItem = props => (
  <li className="list-group-item">
    <div className="row">
      <a rel="noreferrer noopener" target="_blank" href={props.href}>
        <h3>{props.topic}</h3>
      </a>
    </div>
  </li>
);

export default ResultItem;
