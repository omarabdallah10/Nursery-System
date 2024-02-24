const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    class:{type: Number, ref: "classes"}, //ref to the department collection
    image: String
});

module.exports = mongoose.model("childern", schema); //childern is the collection name in the db