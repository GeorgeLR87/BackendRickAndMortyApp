const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: {
        type: mongoose.Schema.ObjectId,
        ref: "Location"
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    image: String,
    episode: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode'
    }],
    created: Date,
})


module.exports = mongoose.model('Character', CharacterSchema)