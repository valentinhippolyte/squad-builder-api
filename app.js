const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const RoutePlayers = require('./router/player')

mongoose.connect('mongodb+srv://valentin_hippolyte:awzgH1VzolQFT2gw@iut.qkija.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{
    console.log("connexion success")
}).catch((error)=>{
    console.log(error);
});

app.use(bodyParser.json());
app.use('/api/players/', RoutePlayers);

module.exports = app;