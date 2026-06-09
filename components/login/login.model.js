import mongoose from "mongoose";
import { contact } from "./login.schema.js";

export const userSchema = mongoose.model("user", contact, "contact");
