const jwt = require('jsonwebtoken');
const User = require('../models/userM');
const { registerSchema } = require('../schema_validation/userValidation');

exports.register = async (req, res) => {
  try {
    // Validate request body against the register schema
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};