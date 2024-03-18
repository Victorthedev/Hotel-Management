const RoomType = require('../models/roomType');

exports.createRoomType = async (req, res) => {
  try {
    const roomType = await RoomType.create(req.body);
    res.status(201).json(roomType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllRoomTypes = async (req, res) => {
  try {
    const roomTypes = await RoomType.find();
    res.json(roomTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
