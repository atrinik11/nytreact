const controller = require("../controllers/controller");
const router = require("express").Router();
const path = require("path");

router.get("/api/retrieve", controller.findAll);

router.post("/api/save", controller.create);

router.delete("/api/save/:id", controller.remove);

router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
