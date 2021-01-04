const express   = require("express");
const mongoose  = require("mongoose");
require ('dotenv').config();

//App config
const app   = express();
const port  = process.env.PORT || 5001;

//middleware


//db config

const uri   = process.env.ATLAS_URI;
mongoose.connect(uri, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                  }
                )
const connection = mongoose.connection;
console.log("Mongoose... Connection successfully established.");

//api endpoints
app.get('/', (req, res) => {
  res.status(200).send('App Running Successfully')
})

//listener
app.listen(port, () => console.log(`Tinder Running on Port : ${port}`));