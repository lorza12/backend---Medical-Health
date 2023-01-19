import { Schema, model, Document } from "mongoose";
import { userProfileType } from "./user.types";
import bcrypt from "bcryptjs";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nacionality: string;
  avatar: string;
  role: "USER" | "ADMIN";
  phone: string;
  birthday: Date;
  gender: string;
  location: string;
  isActive: boolean;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
  fullName: string;
  profile: userProfileType;
  comparePassword: (passsword: string) => Promise<boolean>;
}

const UserSchema = new Schema(
  {
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
      enum: ["USER", "ADMIN"],
      default: "USER",
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
      require: false,
    },
    appointments: {
      type: Schema.Types.ObjectId,
      ref: 'citas',
    },
    gender: {
      type: String,
      require: false,
    },

    location: {
      type: String,
      required: false,
    },

    isActive: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre("save", async function save(next: Function) {
  const user = this as unknown as UserDocument;

  try {
    if (!user.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error: any) {
    next(error);
  }
});

// UserSchema.virtual("fullName").get(function () {
//   const { firstName, lastName } = this;
//   return `${firstName} ${lastName}`;
// });

// UserSchema.virtual("profile").get(function profile() {
//   const { firstName, lastName, email, avatar, role, nacionality } = this;

//   return {
//     firstName,
//     lastName,
//     email,
//     avatar,
//     role,
//     nacionality,
//   };
// });

async function comparePassword(
  this: UserDocument,
  candidatePassword: string,
  next: Function
) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);

    return isMatch;
  } catch (error: any) {
    next(error);
    return false;
  }
}

UserSchema.methods.comparePassword = comparePassword;

const User = model<UserDocument>("User", UserSchema);

export default User;
