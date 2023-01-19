import { DocumentDefinition, FilterQuery } from "mongoose";
import Products, { ProductsDocument } from "./products.model";


export function getAllProducts() {
  return Products.find()
   
}

export function getProductsById(id: string) {
   const products = Products.findById(id)
   return products;
}

export function getProducts(filter: FilterQuery<ProductsDocument>) {
   const products = Products.findOne(filter);

   return products;
}

export function createProducts(userData: DocumentDefinition <Omit<ProductsDocument, 'createdAt' | 'updatedAt'>>) {

  return Products.create(userData);
  
}

export function updateProducts(id: string, user: DocumentDefinition <Omit<ProductsDocument, 'createdAt' | 'updatedAt'>>) {
   const updateProducts = Products.findByIdAndUpdate(id, user, { new: true });
   
   return updateProducts;
}

export function deleteProducts(id: string) {
   const deleteProducts = Products.findByIdAndDelete(id);
   return deleteProducts
}