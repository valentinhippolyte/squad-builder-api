const Player = require('../models/player.js');
const Team = require('../models/team.js');

exports.createPlayer = (req, res) => {
    const play = new Player({
        _id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        team: req.body.team
    });

    play.save()
    .then((player) => {
        return res.status(201).json({player})
    })
    .catch((error) =>{
        return res.status(400).json({error}) })
}

exports.getOnePlayer = (req, res) => {
    const id = req.params.id;
    Player.findOne({_id: id}).populate("team")
    .then((player) => {
        return res.status(200).json({player}) })
    .catch((error) => { return res.status(400).json({error}) });
}

exports.getAllPlayer = (req, res) => {
    Player.find()
    .then((players) => {
        return res.status(200).json({players}) })
    .catch((error) => { return res.status(400).json({error}) });
}
exports.findByTeamId = (req, res) => {
    const id = req.params.id
    .then((players) => {
        return res.status(200).json({players}) })
    .catch((error) => { return res.status(400).json({error}) });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Player.findByIdAndDelete({_id: id})
    .then(() =>{
        return res.status(200).json("delete successful") })
    .catch((error) => { return res.status(400).json({error}) });
}

exports.update = (req, res) => {
    const id = req.params.id;
    
    Player.findByIdAndUpdate({_id: id}, req.body)
    .then((player) => {
        return res.status(201).json(player) })
    .catch((error) => { return res.status(400).json({error}) });
}
