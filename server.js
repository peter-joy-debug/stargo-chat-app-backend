
const { MongoClient, ServerApiVersion} = require("mongodb");
const express = require("express");
const mongoose = require("mongoose");

const USERNAME_ = 'peter';
const PASSWORD_ = 'akagera123A'
const CLUSTER_ = 'cluster0.bm3xk'
const DBNAME_ = 'stargo_db'

const url = `mongodb+srv://${USERNAME_}:${PASSWORD_}@${CLUSTER_}.mongodb.net/${DBNAME_}?retryWrites=true&w=majority`;


var app = express();
var port = 5000;



mongoose.connect(
  url, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


 
app.get("/", (req, res) => {
res.send("Hello World Joy");
});
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});