import { DocumentDefinition, FilterQuery} from 'mongoose';
import Appointment, { AppointmentDocument} from './Appointment.model';


export function getAllAppointments() {
  return Appointment.find({})
   
}

export function getAppointmentById(id: string) {
   const AppointmentResult = Appointment.findById(id)
   return AppointmentResult;
}

export function createAppointment(appointmentData: DocumentDefinition<Omit<AppointmentDocument, 'createdAt' | 'updateAt'>>) {
  
  return Appointment.create(appointmentData);
  
}

// export function updateProduct(
//    id: string,
//    Appointment: DocumentDefinition<Omit<AppointmentDocument, 'createdAt' | 'updatedAt'>>,
//  ) {
//    return Appointment.findByIdAndUpdate(id, Appointment, { new: true });
//  }

export function deleteAppointment(id: string) {
   const deleteAppointment = Appointment.findByIdAndDelete(id);
   return deleteAppointment
}