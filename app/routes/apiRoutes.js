const controller = require("../controllers/controller");
const router = require("express").Router();

//Get all articles
router.route("/").get(controller.findAll);

//Saving the article
// router.route("/savedArticles").post(controller.create);
router.post("/savedArticles", controller.create);
// router.post('/', function(req, res){

//Deleting an article
router.route("/savedArticles/:id").delete(controller.remove);

module.exports = router;
