import User from "./user.model";


export function getAllusers() {
  return User.find()
   
}

export function getUserById(id) {
   const user = User.findById(id)
   return user;
}

export function createUser(userData) {
   console.log(userData);
  return User.create(userData);
  
}

export function deleteUser(id) {
   const deleteUser = User.findByIdAndDelete(id);
   return deleteUser
}