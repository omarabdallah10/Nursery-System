const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: Number,
    name: String,
    password: String,
    class: { type: Number, ref: "classes" },
    image: String
});

module.exports = mongoose.model("teachers", schema); //teachers is the collection name in the db