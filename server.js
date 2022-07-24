require("dotenv").config();

const { MongoClient, ServerApiVersion} = require("mongodb");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const SocketServer = require('./socketServer');

const USERNAME_ = 'peter';
const PASSWORD_ = 'akagera123A'
const CLUSTER_ = 'cluster0.bm3xk'
const DBNAME_ = 'stargo_db'

const url = `mongodb+srv://${USERNAME_}:${PASSWORD_}@${CLUSTER_}.mongodb.net/${DBNAME_}?retryWrites=true&w=majority`;


var app = express();
var port = 8000;



mongoose.connect(
  url, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);



// app.get("/", (req, res) => {
// res.send("Hello World Joy");
// });
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});


const corsOptions = {
  Credential: 'true',
  
};

app.options("*" , cors(corsOptions));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json


//#region // !Socket
const http = require('http').createServer(app);
const io = require('socket.io')(http);


io.on('connection', socket => {
  SocketServer(socket);
})

//#endregion

//#region // !Routes
app.use('/api', require('./routes/AuthenticationRouter'));
app.use('/api', require('./routes/UserRouter'));
app.use('/api', require('./routes/PostRouter'));
app.use('/api', require('./routes/CommentRouter'));
app.use('/api', require('./routes/AdminRouter'));
app.use('/api', require('./routes/NotificationRouter'));
app.use('/api', require('./routes/MessageRouter'));
//#endregion


// Database connectivity

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



