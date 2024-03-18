const express = require('express');
const router = express.Router();
const roomTypeC = require('../controllers/roomTypeC');

router.post('/', roomTypeC.createRoomType);
router.get('/', roomTypeC.getAllRoomTypes);

module.exports = router;
