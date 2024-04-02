import { Request, Response } from 'express';
import RoomType from '../models/roomType';

export const createRoomType = async (req: Request, res: Response): Promise<void> => {
  try {
    const roomType = await RoomType.create(req.body);
    res.status(201).json(roomType);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getAllRoomTypes = async (req: Request, res: Response): Promise<void> => {
  try {
    const roomTypes = await RoomType.find();
    res.json(roomTypes);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
