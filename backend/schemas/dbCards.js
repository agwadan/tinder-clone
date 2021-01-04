const mongoose = require("mongoose");

const Schema = mongoose.Schema

const cardSchema = new Schema({
    name    : String,
    imgUrl  : String
})

 const Card = mongoose.model('cards', cardSchema) //----------- Setting up the collection name and it's model/schema.
 module.exports = Card;