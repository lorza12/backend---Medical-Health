import { DocumentDefinition, FilterQuery } from "mongoose";
import Doctor, { DoctorDocument } from "./doctor.model";

export function getAllDoctors() {
  return Doctor.find();
}

export function getDoctorById(id: string) {
  const doctor = Doctor.findById(id);
  return doctor;
}

export function getDoctor(filter: FilterQuery<DoctorDocument>) {
  const doctor = Doctor.findOne(filter);

  return doctor;
}

export function createDoctor(doctorData: DocumentDefinition <Omit<DoctorDocument, 'createdAt' | 'updatedAt'>>) {
  return Doctor.create(doctorData);
}

export function updateDoctor(id: string, doctor: DocumentDefinition <Omit<DoctorDocument, 'createdAt' | 'updatedAt'>>) {
  const updateDoctor = Doctor.findByIdAndUpdate(id, doctor, { new: true });
  return updateDoctor;
}

export function deleteDoctor(id: string) {
  const deleteDoctor = Doctor.findByIdAndDelete(id);
  return deleteDoctor;
}
