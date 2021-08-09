const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const WordSchema = new Schema({
    word: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },

    turkishMeanings: {
        type: Array
    }
}, {
    collection: 'Word',
    timestamps: true
});


const Word = mongoose.model('Word', WordSchema);


module.exports = Word;