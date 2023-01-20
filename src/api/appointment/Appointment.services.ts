import { DocumentDefinition, FilterQuery} from 'mongoose';
import Appointment, { AppointmentDocument} from './Appointment.model';


export function getAllAppointments() {
  return Appointment.find({})
   
}

export function getAppointmentById(id: string) {
   const AppointmentResult = Appointment.findById(id)
   return AppointmentResult;
}

export function getAppoimentByUser(userId:string){
  return Appointment.find({userId}).populate({path:"doctorId",select:"name specialty"})
}
export function getAppoimentByDoctor(doctorId:string){
  return Appointment.find({doctorId}).populate({path:"userId",select:"firstName lastName"})
}
export function createAppointment(appointmentData: DocumentDefinition<Omit<AppointmentDocument, 'createdAt' | 'updateAt'>>) {
  
  return Appointment.create(appointmentData);
  
}

export function updateAppointment(id: string, user: DocumentDefinition <Omit<AppointmentDocument, 'createdAt' | 'updatedAt'>>) {
  const updateuser = Appointment.findByIdAndUpdate(id, user, { new: true });
  
  return updateuser;
}


export function deleteAppointment(id: string) {
   const deleteAppointment = Appointment.findByIdAndDelete(id);
   return deleteAppointment
}