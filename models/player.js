const Team = require('../models/team.js');
var mongoose = require('mongoose'), Schema = mongoose.Schema

const PlayerSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true
    }, 
    image:{
        type: String, 
        required: true
    },
    team:{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = mongoose.model('Player', PlayerSchema);