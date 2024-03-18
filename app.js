const express = require('express');
const bodyParser = require('body-parser');
const db = require('./mongo');
const roomTypeRoutes = require('./routes/roomTypeR');
const roomRoutes = require('./routes/roomR');

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/room-types', roomTypeRoutes);
app.use('/api/v1/rooms', roomRoutes);

const PORT = process.env.PORT || 3000;

db.once('open', () => {
  console.log('Connected to database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
