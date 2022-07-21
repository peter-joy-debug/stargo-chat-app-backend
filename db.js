// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://peter:<akagera123A>@cluster0.bm3xk.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//  client.connect(err => {
//  const collection = client.db("stargo");
//  console.log('Connected to the database ');
//   // perform actions on the collection object
//  client.close();
//  });

// async function main() {
//     const MongoClient = require('mongodb').MongoClient;
//     const uri ='mongodb+srv://peter:<akagera123A>@cluster0.bm3xk.mongodb.net/stargo_db?retryWrites=true&w=majority';
//     const client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect((err) => {
//     const collection = client.db('stargo_db').collection('user');
//       // perform actions on the collection object
//       console.log("Database created!");

//       client.close();
//     });
//   }
//   main().catch(console.error);



  
async function main() {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://peter:akagera123A@cluster0.bm3xk.mongodb.net/?retryWrites=true&w=majority";
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("stargo_db");
      dbo.createCollection("algotester", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    });
  }
  main().catch(console.error);