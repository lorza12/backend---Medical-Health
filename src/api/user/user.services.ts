import { DocumentDefinition, FilterQuery } from 'mongoose';
import { AppointmentDocument } from '../appointment/Appointment.model';
import User, { UserDocument } from './user.model';

export function getAllusers() {
  return User.find();
}

export function getUserById(id: string) {
  const user = User.findById(id);
  return user;
}
export function getUserByemail(email:string) {
  const user = User.find({email: email});

  return user;
}


export function getUser(filter: FilterQuery<UserDocument>) {
  const user = User.findOne(filter);

  return user;
}

export function createUser(
  userData: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>
) {
  return User.create(userData);
}

export function updateUser(id: string, user: DocumentDefinition <Omit<AppointmentDocument, 'createdAt' | 'updatedAt'>>) {

  const updateuser = User.findByIdAndUpdate(id, user, {new: true });

  return updateuser;
}

export function deleteUser(id: string) {
  const deleteUser = User.findByIdAndDelete(id);
  return deleteUser;
}
