'use client'

import Button from "@/components/Button";
import CounterDisplay from "@/components/CountDisplay";
import NumberUnits from "@/components/NumberUnits";
import Price from "@/components/Price";
import Image from "next/image";
import { Product } from "@/types";

import { fetchProduct } from "@/services/fetchProducts";
import { useEffect, useState, useContext, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";
import { calculateOnProductContext } from "@/context/CalculateOnProduct";
import { CartContext } from "@/context/Cart";

export default function ProductDetails() {
   const router = useRouter()
   const id = useSearchParams().get("id")

   const [product, setProduct] = useState<Product | null>(null)
   const { setProducOnCalculate, cantidadB, setCantidadA, setCantidadB } = useContext(calculateOnProductContext)
   const { addItem, removeItem } = useContext(CartContext)

   useEffect(() => {
      //resetar contadores
      setCantidadA(1)
      setCantidadB(1)

      if (product) {
         setProducOnCalculate(product)
      }

      fetchProduct(Number(id))
         .then(prod => {
            setProduct(prod)
         })
         .catch(() => {
            router.push('/not-found')
         })

   }, [product])


   const handleAddToCart = () => {
      if (product) {
         addItem(product, cantidadB);
      }
   };

   const handleRemoveToCart = () => {
      if (product) {
         removeItem(product.id)
      }
   };

   return (
      <div className="flex flex-col lg:max-w-[1200px] lg:flex-row">
         {product ? (
            <>
               <div className="flex w-full p-10 lg:w-1/2">
                  <Image src={product.image} alt="" height={0} width={0} layout="responsive" />
               </div>
               <div className="flex flex-1 flex-col gap-5">
                  <div className="flex flex-col">
                     <strong className="text-2xl">{product.title}</strong>
                     <span>{`Cantidad disponible: ${product.stock}`}</span>
                  </div>

                  <Price product={product} />

                  <div className="flex gap-10">
                     {(product.salesUnit != "unidad") && <NumberUnits />}
                     <CounterDisplay />
                  </div>

                  <p>{product.description}</p>

                  <Button intent="primary" title="Agregar al carrito" handlerClick={handleAddToCart} />
                  <Button title="Eliminar del carrito" handlerClick={handleRemoveToCart} />
               </div>
            </>
         ) : (
            <Loader />
         )}
      </div>



   )
}


