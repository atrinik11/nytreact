const db = require("../models/Article");

//Defining methods for the articles
module.exports = {
  //Method handles retrieving all saved articles from the db
  findAll: function(req, res) {
    console.log("article retrieved: ", req.body);
    db.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(433).json(err));
  },
  //Method handles creating new Article in the db
  create: function(req, res) {
    console.log("article to be saved: ", req.body);
    db.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  remove: function(req, res) {
    console.log("article to be removed: ", req.body);
    db.remove({
      _id: req.params.id
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
