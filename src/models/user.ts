import mongoose, { model, Model, Schema, Types } from "mongoose";
import { User } from "../interface/user";

const UserSchema = new Schema<User>({
  ardaId: {
    type: String,
    unique: true,
    required: true,
  },
  username: { type: String },
  name: { type: String },
  imageUrl: { type: String },
  professionalHeadline: {},
});

const UserModel = model("users",UserSchema)
export default UserModel
