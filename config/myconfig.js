var mongoose = require('mongoose');

module.exports = mongoose.connect(' mongodb+srv://HemanthNarne:Apple5454@cluster0-lizqx.mongodb.net/test?retryWrites=true ')
.then(() => {
console.log("DB connected")
}, err => {
console.log("DB error")
}
);