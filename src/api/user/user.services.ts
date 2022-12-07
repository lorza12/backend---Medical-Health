import User from "./user.model";


export async function getAllusers() {
   try {
    const users = await User.find();
    return users;
   } catch (error) {
    console.log(error);
    return null;
   }
   
}