import { Schema, model } from "mongoose";

const UserSchema = new Schema({

   name: {
    type: String,
    require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        min: 6,
    },
    birthday: {
        type: Date,
        require: true,
    },
    telephone: {
        type: Number,
        require: true,
    },
    location: {
        type: String,
        required: true,
      },
    //   appointments: {
    //     type: Array,
    //   },
     //   clinicHistory: {
    //     type: Array,
    //   },

    

}, {
    timestamps: true,
    versionKey: false,
});

const User = model('User', UserSchema);

export default User;