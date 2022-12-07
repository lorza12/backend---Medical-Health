import { Schema, model } from "mongoose";

const UserSchema = new Schema({
   name: String,



})

const User = model('doctor', UserSchema);

export default User;