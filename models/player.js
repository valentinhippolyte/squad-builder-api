const mongoose = require('mongoose');
const play = mongoose.Schema({
    name:{
        type: String, 
        required: true
    }, 
    image:{
        type: String, 
        required: true
    }, 
    equipe:{
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Player', play);