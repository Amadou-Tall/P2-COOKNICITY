const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema ({
    content: String
})

module.exports = mongoose.model('About', aboutSchema);
