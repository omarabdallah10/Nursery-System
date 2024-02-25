const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  city: { type: String },
  street: { type: Number },
  building: { type: Number },
});

const schema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number,
  level: { type: String, enum: ["PreKG", "KG1", "KG2"], required: true },
  address: addressSchema,
  image: String,
});

module.exports = mongoose.model("childern", schema); //childern is the collection name in the db
