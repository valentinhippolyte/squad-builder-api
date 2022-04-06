const mongoose = require('mongoose');
const team = mongoose.Schema({
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
    }
});

module.exports = mongoose.model('Team', team);