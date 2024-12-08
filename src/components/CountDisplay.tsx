'use client'

import useCounter from "@/hook/useCounter";
import ButtonCounter from "./ButtonCounter";

export default function CounterDisplay() {
   const {counter, decrement, increment} = useCounter({ min: 0, max: 10 })

   return(
      <div className="inline-flex flex-col gap-2">
         <div>
            <strong>Cantidad de palles</strong>
         </div>
         <div className="flex items-center gap-2">
            <ButtonCounter 
               image="/remove-circle-outline.svg" 
               handlerClick={decrement}
            />

            <strong className="flex justify-center items-center border border-gray-500 rounded-lg w-20 h-8">
               {counter}
            </strong>

            <ButtonCounter 
               image="/add-circle-outline.svg" 
               handlerClick={increment}
            />
         </div>
      </div>
   )
}