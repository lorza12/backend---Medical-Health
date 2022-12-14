import { Schema, model } from "mongoose";

const DoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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

const Doctor = model("doctor", DoctorSchema);

export default Doctor;
