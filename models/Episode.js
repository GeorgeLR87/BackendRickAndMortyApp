const mongoose = require('mongoose');

const EpisodeSchema = mongoose.Schema({
    name: String, 
    air_date: String,
    episode: String,
    characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }],
    created: Date
})

module.exports = mongoose.model('Episode', EpisodeSchema);