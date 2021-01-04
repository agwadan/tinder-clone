const mongoose  = require("mongoose");
const express   = require("express");

//App config
const app   = express();
const port  = process.env.PORT || 5001 ;

//middleware


//db config

//api endpoints
app.get('/', (req, res) => {
  res.status(200).send('App Running Successfully')
})

//listener
app.listen(port, () => console.log(`Tinder Running on Port : ${port}`));