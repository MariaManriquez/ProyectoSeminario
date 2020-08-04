var mongoose = require("./connect");
var userschema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,
    date: Date,
    gustos : Array
});
var user = mongoose.model("user",userschema);
module.exports = user;