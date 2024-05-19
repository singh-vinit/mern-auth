import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface MyDocument extends Document {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  createHash: (plainTextPassword: string) => Promise<string>;
  validatePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new Schema<MyDocument>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.createHash = async function (plainTextPassword: string) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);
};

userSchema.methods.validatePassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<MyDocument>("User", userSchema);
