const express = require('express');
const router = express.Router();
const roomC = require('../controllers/roomC');

router.post('/', roomC.createRoom);
router.get('/', roomC.getAllRooms);
router.get('/:roomId', roomC.getRoomById);
router.patch('/:roomId', roomC.updateRoom);
router.delete('/:roomId', roomC.deleteRoom);

module.exports = router;
