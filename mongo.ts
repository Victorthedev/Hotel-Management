import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
