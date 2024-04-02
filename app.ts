import express, { Application } from 'express';
import bodyParser from 'body-parser';
import db from './mongo';
import roomTypeRoutes from './routes/roomTypeR';
import roomRoutes from './routes/roomR';
import { Connection } from 'mongoose';

const app: Application = express();

app.use(bodyParser.json());

app.use('/api/v1/room-types', roomTypeRoutes);
app.use('/api/v1/rooms', roomRoutes);

const PORT: number | string = process.env.PORT || 3000;

db.once('open', () => {
  console.log('Connected to database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
