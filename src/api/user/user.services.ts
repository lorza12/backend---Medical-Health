import User from "./user.model";


export function getAllusers() {
  return User.find().sort({ createdAt:-1 })
   
}

export function getUserById(id) {
   const user = User.findById(id)
   return user;
}

export function createUser(user) {
   console.log(user);
  return User.create(user);
  
}

export function deleteUser(id) {
   const deleteUser = User.findByIdAndDelete(id);
   return deleteUser
}