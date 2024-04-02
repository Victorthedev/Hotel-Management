import express, { Router } from 'express';
const router: Router = express.Router();
import * as roomC from '../controllers/roomC';

router.post('/', roomC.createRoom);
router.get('/', roomC.getAllRooms);
router.get('/:roomId', roomC.getRoomById);
router.patch('/:roomId', roomC.updateRoom);
router.delete('/:roomId', roomC.deleteRoom);

export default router;
