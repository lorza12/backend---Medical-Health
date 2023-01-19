import { Schema, model } from "mongoose";

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
    user: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    doctor: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    birth: {
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
      require: false,
    },
    nationality: {
      type: String,
      require: true,
    },
    hospital: {
      type: String,
      require: true,
    },
    sex: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    residence: {
      type: String,
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
