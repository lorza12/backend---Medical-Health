import Doctor from "./doctor.model";

export function getAllDoctors() {
  return Doctor.find();
}

export function getDoctorById(id) {
  const doctor = Doctor.findById(id);
  return doctor;
}

export function createDoctor(doctorData) {
  return Doctor.create(doctorData);
}

export function updateDoctor(id, doctor) {
  const updateDoctor = Doctor.findByIdAndUpdate(id, doctor, { new: true });
  return updateDoctor;
}

export function deleteDoctor(id) {
  const deleteDoctor = Doctor.findByIdAndDelete(id);
  return deleteDoctor;
}
