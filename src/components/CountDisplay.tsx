'use client'

import useCounter from "@/hook/useCounter";
import ButtonCounter from "./ButtonCounter";
import { useContext, useEffect } from "react";
import { calculateOnProductContext } from "@/context/CalculateOnProduct";


export default function CounterDisplay() {
   const { productSelected ,setCantidadB, cantidadB } = useContext(calculateOnProductContext)

   const { counter, decrement, increment, setValue } = useCounter({ min: 1, max: productSelected?.stock ?? 1 })

   useEffect(() => {
      setValue(cantidadB)
   }, [cantidadB])

   useEffect(() => {
      setCantidadB(counter)
   }, [counter])

   return (
      <div className="inline-flex flex-col gap-2">
         <div>
            <strong>{`Cantidad de ${productSelected?.salesUnit}`}</strong>
         </div>
         <div className="flex items-center gap-2">
            <ButtonCounter
               image="/remove-circle-outline.svg"
               handlerClick={decrement}
            />

            <input
               className="text-center border border-gray-500 rounded-lg w-20 h-8"
               value={counter}
            />

            <ButtonCounter
               image="/add-circle-outline.svg"
               handlerClick={increment}
            />
         </div>
      </div>
   )
}