//Require dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/apiRoutes");
const app = express();
// require("dotenv").config();
const PORT = process.env.PORT || 3001;

//Define the middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Server up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Adding the routes
app.use("/", routes);

//Connect to the Mongo DB
const db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = global.Promise;
mongoose.connect(
  db,
  function(error) {
    if (error) {
      console.log("Mongoose Error: ", error);
    } else {
      console.log("Database connected Successfully!");
    }
  }
);

//Start the API server
app.listen(PORT, function() {
  console.log(`API server now listening on PORT ${PORT}!`);
});
