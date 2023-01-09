import { Schema, model } from "mongoose";

export interface AppointmentDocument extends Document {
  date: Date;
  doctor: string;
  speciality: string;
  reasonForConsultation: string;
  price: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Appointment = model<AppointmentDocument>("citas", AppointmentSchema);

export default Appointment;
