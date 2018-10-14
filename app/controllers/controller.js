const Articles = require("../models/article");

//Defining methods for the articles
module.exports = {
  //Method handles retrieving all saved articles from the db
  findAll: function(req, res) {
    Articles.find({}, function(err, docs) {
      if (err) {
        return res.send(err);
      }
      res.json(docs);
    });
  },
  //Method handles creating new Article in the db
  create: function(req, res) {
    let newArticle = new Articles({
      topic: req.body.topic,
      date: req.body.date,
      url: req.body.url
    });
    newArticle.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json(newArticle);
    });
  },
  //Method hadles deleting an Article from the db
  remove: function(req, res) {
    Articles.findByIdAndRemove(req.query.id, function(err) {
      if (err) {
        return res.send(err);
      }
      res.sendStatus(204);
    });
  }
};
