const mongoose = require("mongoose");

//1- object schema from mongoose
const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true, unique: true }, // will make index in db
  supervisor: { type: Number, unique: true, ref: "teachers" },
  children: [{ type: Number, ref: "children" }],
});

//2-mapping the schema to the collection
module.exports = mongoose.model("classes", schema); //departments is the collection name in the db
