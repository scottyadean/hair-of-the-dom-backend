const settings    = require('./src/settings');
const serverless  = require('serverless-http');
const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const app         = express();
const cors        = require('cors');

try {
  // Connect to the MongoDB cluster
  mongoose.set('strictQuery', true);
  mongoose.connect(
    settings.mongo_endpoint,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

app.use(cors())
const routes = require('./src/routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes and middleware
routes(app);
// app.use((err, req, res, next)=>{
//   console.log(err)
// })

//app export optimized for serverless.
module.exports.app = serverless(app)
//app export optimized for local dev. 
module.exports.test = app