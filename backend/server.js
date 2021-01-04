const express   = require("express");
const mongoose  = require("mongoose");
const Cors      = require("cors");
//import cardSchema from './schemas/dbCards';

let Card = require('./schemas/dbCards');

require ('dotenv').config();

//App config
const app   = express();
const port  = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(Cors());

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

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  Card.create(dbCard, (err, data) => {
    if(err){
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/tinder/cards', (req, res) => {
  const dbCard = req.body;
  Card.find(dbCard, (err, data) => {
    if(err){
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

//listener
app.listen(port, () => console.log(`Tinder Running on Port : ${port}`));