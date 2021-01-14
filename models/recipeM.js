const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timestamps: true
});

const recipeSchema = new Schema ({
    name: {
        type: String,
    },
    origin: {
        type: String,
    },
    details: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    instructions: {
        type: String,
    },

    time: String,

    image: String,

    // email: String,

    reviews: [reviewSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Recipe', recipeSchema);
