import { Schema, model, Document, AsyncValidateFn } from "mongoose";
import bcrypt from "bcryptjs";
import { doctorProfileType} from './doctor.types';


export interface DoctorDocument extends Document {
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN";
  location: string;
  password: string;
  email: string;
  specialty: string;
  avatar: string;
  isActive: boolean;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updatedAt: Date;

  fullName: string;
  profile: doctorProfileType;
  comparePassword: (passsword: string) => Promise<boolean>;
}


const DoctorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "ADMIN",
    },
    location: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    email: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
//     appointments: {
//       type: Array,
//     },
//     skills: {
//       type: Array,
//     },
//     qualifications: {
//       type: Array,
//     },
//     image: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

DoctorSchema.virtual("profile").get(function profile() {
  const { firstName, lastName, email, avatar, role } = this;

  return {
    firstName,
    lastName,
    email,
    avatar,
    role,
  };
});

DoctorSchema.virtual("fullName").get(function () {
  const { firstName, lastName } = this;
  return `${firstName} ${lastName}`;
})

DoctorSchema.pre("save", async function save(next: Function) {
  const doctor = this as DoctorDocument;

  try {
    if (!doctor.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(doctor.password, salt);

    doctor.password = hash;
  } catch (error: any) {
    next(error);
  }
});

async function comparePassword(
  this: DoctorDocument,
  candidatePassword: string,
  next: Function
) {
  const doctor = this;

  try {
    const isMatch = await bcrypt.compare(candidatePassword, doctor.password);

    return isMatch;
  } catch (error: any) {
    next(error);
    return false;
  }
}

DoctorSchema.methods.comparePassword = comparePassword;



const Doctor = model<DoctorDocument>("doctor", DoctorSchema);

export default Doctor;
