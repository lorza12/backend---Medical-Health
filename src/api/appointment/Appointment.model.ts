import { Schema, model, Mongoose, SchemaType } from "mongoose";

export interface AppointmentDocument extends Document {
  date: Date;
  user: string;
  doctor: string;
  email: string;
  birth: string;
  speciality: string;
  reasonForConsultation: string;
  price: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      require: true,
      ref:"user"
    },
    date: {
      type: Date,
      require: true,
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      require: true,
      ref:"doctor"
    },
    //implementar el crud
    speciality: {
      type: String,
      require: true,
    },
    reasonForConsultation: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      default:200000
    },
    place: {
      type: String,
      default: "virtual",
      enum:["virtual", "onSite"]
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Appointment = model<AppointmentDocument>("appoiment", AppointmentSchema);

export default Appointment;
