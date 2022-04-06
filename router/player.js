const express = require('express');
const router = express.Router();
const PlayerCtrl = require('../controllers/player')

router.post('/', PlayerCtrl.createPlayer);
router.get('/:id', PlayerCtrl.getOnePlayer);
router.get('/', PlayerCtrl.getAllPlayer);
router.put('/:id', PlayerCtrl.update);
router.delete('/:id', PlayerCtrl.delete);



module.exports = router;