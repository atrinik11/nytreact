import React from "react";
import "./SavedArticles.css";

const SavedArticles = props => {
  const removeArticle = event => {
    var index = event.target.name;
    props.removeArticle(index);
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">Saved Atricles </div>
          <div className="panel-body">
            {props.saved.map((article, i) => (
              <div key={i} id={"result_" + (i + 1)} className="imp">
                <a href={article.url}>
                  <h4>{article.topic}</h4>
                </a>
                <p>Date Published: {article.date}</p>
                <button
                  name={article._id}
                  className="btn btn-success"
                  onClick={removeArticle}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // <div className="list-overflow-container">
  //   <ul className="list-group">{props}</ul>
  // </div>
};
export default SavedArticles;
