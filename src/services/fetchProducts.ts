import { products } from "./products"
import { Product } from "@/types";

const TIME = 1000

export function fetchProducts(): Promise<Product[]> {
   return new Promise((resolve, rejact) => {
      setTimeout(() => {
         resolve(products);
         rejact(new Error("algo salio mal"))
      }, TIME)
   })
}

export function fetchProduct(idProduct: number): Promise<Product> {
   const product = products.find(prod => prod.id === idProduct)

   console.log(products)

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (product) {
            resolve(product);
         } else {
            reject(new Error("Producto no encontrado")); 
         }
      }, TIME)
   })
}






