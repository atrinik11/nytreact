const path = require("path");
const apiRoutes = require("./apiRoutes");
const router = require("express").Router();

//Use the apiRoutes any thing with /api
router.use("/api", apiRoutes);

//if no API routes are hit, send the react app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
