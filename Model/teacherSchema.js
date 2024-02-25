const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    //object id 
    _id: Number,
    name: String,
    password: String,
    email:{type: String, required: true, unique: true, lowercase: true},
    image: String
});

module.exports = mongoose.model("teachers", schema); //teachers is the collection name in the db