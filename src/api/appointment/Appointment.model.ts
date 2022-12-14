import { Schema, model } from "mongoose";

const AppointmentSchema = new Schema(
  {
    date: {
      type: Date,
      require: true,
    },
    doctor: {
      type: String,
      require: true,
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
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Appointment = model("citas", AppointmentSchema);

export default Appointment;
