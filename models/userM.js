const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    displayName: String,

    email: {
        type: String,
        required: true
    },
    
    googleId: String    
})

module.exports = mongoose.model('Users', userSchema);
