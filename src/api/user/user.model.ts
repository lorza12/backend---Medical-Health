import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
//    firstName: {
//     type: String,
//     require: true,
//     },

//     lastName: {
//     type: String,
//     require: true,

//     },

//     emaial: {
//         type: String,
//         require: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//     },

//     password: {
//         type: String,
//         require: true,
//         min: 6,
//     },

//     role: {
//         type: String,
//         enum: ['USER', 'ADMIN'],
//         default: 'USER',
//     },

//     avatar: {
//         type: String,
//         default: '',
//     },

//     birth: {
//         type : String,
//         require: true,
//     },
    
//     bloodType: {
//         type: String,
//         require: true,
//     },

//     gender: {
//         type: String,
//         required: true,
//     },

//     nationality: {
//         type: String,
//         require: true,
//         uppercase: true,
//     },

//     phone: {
//         type: String,
//         required: true,
//     },

//     isActive: {
//         type: Boolean,
//         default: false,
//       },

}, {
    timestamps: true,
    versionKey: false,
});

const User = model('User', UserSchema);

export default User;