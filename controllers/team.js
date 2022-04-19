const Team = require('../models/team.js');
const Player = require('../models/player.js');


exports.getOneTeam = (req, res) => {
    const id = req.params.id;
    Team.findOne({_id: id}).populate("players")
    .then((team) => {
        return res.status(200).json({team}) })
    .catch((error) => { return res.status(400).json({error}) });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Team.findByIdAndDelete({_id: id})
    .then(() =>{
        return res.status(200).json("delete successful") })
    .catch((error) => { return res.status(400).json({error}) });
}

exports.update = (req, res) => {
    const id = req.params.id;
    
    Team.findByIdAndUpdate({_id: id}, req.body)
    .then((team) => {
        return res.status(201).json(team) })
    .catch((error) => { return res.status(400).json({error}) });
}

exports.createTeam = (req, res) => {
    const team = new Team(req.body);

    team.save()
    .then((team) => {
        return res.status(201).json({team})
    })
    .catch((error) =>{
        return res.status(400).json({error}) })
}
exports.getAllTeam = (req, res) => {
    Team.find().populate("players")
    .then((teams) => {
        return res.status(200).json({teams}) })
    .catch((error) => { return res.status(400).json({error}) });
}
