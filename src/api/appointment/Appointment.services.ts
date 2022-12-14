import Appointment from "./Appointment.model";


export function getAllAppointments() {
  return Appointment.find().sort({ createdAt:-1 })
   
}

export function getAppointmentById(id) {
   const AppointmentResult = Appointment.findById(id)
   return AppointmentResult;
}

export function createAppointment(appointmentData) {
   console.log(appointmentData);
  return Appointment.create(appointmentData);
  
}

export function deleteAppointment(id) {
   const deleteAppointment = Appointment.findByIdAndDelete(id);
   return deleteAppointment
}