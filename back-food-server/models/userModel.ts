import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: [true, "Please fill the field"] },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Please fill the field"],
    minlength: 10,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createdAt: { type: Date, default: new Date() },
});

const User = model("User", userSchema);
export default User;
