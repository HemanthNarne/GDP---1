const mongoose = require('mongoose')


var userSchema = mongoose.Schema({
    firstName: String,
    lastName : String,
    age : Number
    });
    module.exports = mongoose.model('myuser', userSchema);
