const Room = require('../models/room');

exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    let query = {};
    if (req.query.roomType) {
      query.roomType = req.query.roomType;
    }
    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) {
        query.price.$gte = req.query.minPrice;
      }
      if (req.query.maxPrice) {
        query.price.$lte = req.query.maxPrice;
      }
    }
    if (req.query.search) {
      query.name = { $regex: req.query.search, $options: 'i' };
    }

    const rooms = await Room.find(query).populate('roomType');
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId).populate('roomType');
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
