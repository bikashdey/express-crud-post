const mongoose = require("mongoose");

var studentSchema = mongoose.Schema({

    firstname: String,
    lastname: String,
    age: Number,
    dob: String,

});

// "db" is became  collection name inside database mongodb 
var bikash = mongoose.model("db", studentSchema);


module.exports = bikash;