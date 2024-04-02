import mongoose, { Document, Schema } from 'mongoose';

interface RoomType extends Document {
  name: string;
}

const roomTypeSchema: Schema<RoomType> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model<RoomType>('RoomType', roomTypeSchema);
