import mongoose, { Document, Schema, HookNextFunction } from 'mongoose';
import bcrypt from 'bcrypt';

interface User extends Document {
  email: string;
  password: string;
  role: 'guest' | 'admin';
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema: Schema<User> = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['guest', 'admin'],
    default: 'guest',
  },
});

userSchema.pre<User>('save', async function (next: HookNextFunction): Promise<void> {
  try {
    if (!this.isModified('password')) return next();
    const hashedPassword: string = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (this: User, password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model<User>('User', userSchema);
