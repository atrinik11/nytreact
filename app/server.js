//Require dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
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
app.use(routes);

//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

const db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Start the API server
app.listen(PORT, function() {
  console.log(`API server now listening on PORT ${PORT}!`);
});
