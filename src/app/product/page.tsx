'use client'

import Button from "@/components/Button";
import CounterDisplay from "@/components/CountDisplay";
import NumberUnits from "@/components/NumberUnits";
import Price from "@/components/Price";
import Image from "next/image";
import { Product } from "@/types";

import { fetchProduct } from "@/services/fetchProducts";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";



export default function ProductDetails() {
   const id = useSearchParams().get("id")

   const router = useRouter()
   const [product, setProduct] = useState<Product | null>(null)

   useEffect(() => {
      fetchProduct(Number(id))
         .then(prod => {
            setProduct(prod)
         })
         .catch(() => {
            router.push('/not-found')
         })
   }, [])

   return (
      <div className="flex flex-col lg:max-w-[1200px] lg:flex-row">
         {product ? (
            <>
               <div className="flex w-full p-10 lg:w-1/2">
                  <Image src="/12611.jpg" alt="" height={0} width={0} layout="responsive" />
               </div>
               <div className="flex flex-1 flex-col gap-5">
                  <div className="flex flex-col">
                     <strong className="text-2xl">{product.title}</strong>
                     <span>{`Cantidad disponible: ${product.stock}`}</span>
                  </div>

                  <Price
                     priceList={product.listingPrice}
                     priceSale={product.price}
                  />

                  <div className="flex gap-10">
                     <NumberUnits />
                     <CounterDisplay />
                  </div>

                  <p>{product.description}</p>

                  <Button intent="primary" title="Agregar al carrito" />
                  <Button title="Eliminar del carrito" />
               </div>
            </>
         ) : (
            <Loader />
         )}
      </div>
   )
}


