'use client'

import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { Product } from "@/types";
import { fetchProducts } from "@/services/fetchProducts";
import Loader from "./Loader";

export default function ProductsContainer() {
   const [products, setProducts] = useState<Product[]>([])
   
   useEffect(() => {
      fetchProducts()
         .then(data => {
            setProducts(data)
         })
   })

   if(products.length == 0) {
      return <Loader/>
   }

   return (
      <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[1200px]">
         {products.map(product => <CardProduct key={"product" + product.id} product={product} />)}
      </div>
   )
}