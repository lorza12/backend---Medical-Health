import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    nacionality: String;
    avatar?: String;
    role: String
    phone: String;
    birthday: Date;
    gender: String;
    location: String
    isActive: boolean;
    passwordResetToken?: String;
    passwordResetExpires?: Date;
    createdAt: Date;
    updatedAt: Date;

    fullName: String;

    
}

const UserSchema = new Schema({

   firstName: {
    type: String,
    require: true,
    },

    lastName: {
        type: String,
        require: true,
        uppercase: true,
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

    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
    },

    avatar: {
        type: String,
        require: true,
    },

    nacionality: {
        type: String,
        require: true,
    },

    phone: {
        type: String,
        require: true,
    },

    birthday: {
        type: Date,
        require: true,
    },

    gender: {
        type: String,
        require: true,
    },

    location: {
        type: String,
        required: true,
      },

      isActive: {
        type: Boolean,
        default: false,
      },
      passwordResetToken: String,
      passwordResetExpires: Date,
    }, {
      timestamps: true,
      versionKey: false,
    });
   


UserSchema.virtual('fullName').get(function (){
    const { firstName, lastName } = this
    return `${firstName} ${lastName}` 
})


const User = model<UserDocument>('User', UserSchema);

export default User;