const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    name: String,
    type: String,
    dimension: String,
    residents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }],
    created: Date
})


module.exports = mongoose.model('Location', LocationSchema);