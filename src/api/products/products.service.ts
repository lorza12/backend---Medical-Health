import { DocumentDefinition, FilterQuery } from "mongoose";
import Products, { ProductsDocument } from "./products.model";


export function getAllusers() {
  return Products.find()
   
}

export function getUserById(id: string) {
   const products = Products.findById(id)
   return products;
}

export function getUser(filter: FilterQuery<ProductsDocument>) {
   const products = Products.findOne(filter);

   return products;
}

export function createUser(userData: DocumentDefinition <Omit<ProductsDocument, 'createdAt' | 'updatedAt'>>) {

  return Products.create(userData);
  
}

export function updateUser(id: string, user: DocumentDefinition <Omit<ProductsDocument, 'createdAt' | 'updatedAt'>>) {
   const updateProducts = Products.findByIdAndUpdate(id, user, { new: true });
   
   return updateProducts;
}

export function deleteUser(id: string) {
   const deleteUser = Products.findByIdAndDelete(id);
   return deleteUser
}