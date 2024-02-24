const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: Number,
    name: String,
    password: String,
    class: { type: Number, ref: "classes" }
});

module.exports = mongoose.model("teachers", schema); //teachers is the collection name in the db