import mongoose from "mongoose";

export const contact = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mesage: {
    type: String,
  },
});
