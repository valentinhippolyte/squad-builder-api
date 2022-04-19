const Player = require('../models/player.js');
var mongoose = require('mongoose'), Schema = mongoose.Schema;

const TeamSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true
    }, 
    image:{
        type: String, 
        required: true
    },
    country:{
        type: String,
        required: true
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
});

module.exports = mongoose.model('Team', TeamSchema);