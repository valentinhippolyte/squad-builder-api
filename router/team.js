const express = require('express');
const router = express.Router();
const TeamCtrl = require('../controllers/team')

router.post('/', TeamCtrl.createTeam);
router.get('/:id', TeamCtrl.getOneTeam);
router.get('/', TeamCtrl.getAllTeam);
router.put('/:id', TeamCtrl.update);
router.delete('/:id', TeamCtrl.delete);



module.exports = router;