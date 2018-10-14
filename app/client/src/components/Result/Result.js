import React from "react";
import "./Result.css";

const Result = props => {
  const saveArticle = event => {
    let index = event.target.name;
    props.saveArticle(index);
    console.log("in result: ", index);
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="panel panel-primary">
          <div className="panel-heading text-center">Results </div>
          <div className="panel-body">
            {props.results.map((article, i) => (
              <div key={i} id={"result_" + (i + 1)} className="imp">
                <a href={article.web_url}>
                  <h4>{article.headline.main}</h4>
                </a>
                <p>Date Published: {article.pub_date}</p>
                <button
                  name={i}
                  className="btn results btn-success"
                  onClick={saveArticle}
                >
                  Save
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="col-2" /> */}
    </div>
  );
};

export default Result;
