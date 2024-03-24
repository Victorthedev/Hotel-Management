const Room = require('../models/room');
const { createRoomSchema, updateRoomSchema, filterRoomsSchema } = require('../validationSchemas/roomValidation');

exports.createRoom = async (req, res) => {
  try {
    const { error } = createRoomSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const { error } = filterRoomsSchema.validate(req.query);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
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
    const { error } = updateRoomSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
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
