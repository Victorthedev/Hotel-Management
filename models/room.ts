import mongoose, { Document, Schema, Types } from 'mongoose';

interface RoomType {
  _id: Types.ObjectId;
  name: string;
  
}

interface Room extends Document {
  name: string;
  roomType: Types.ObjectId | RoomType;
  price: number;
}

const roomSchema: Schema<Room> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roomType: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType', 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Room>('Room', roomSchema);
