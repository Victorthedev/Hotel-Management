const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://node-auth:Awesome6@cluster0.mn7emsg.mongodb.net/node-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
