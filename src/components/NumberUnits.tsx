'use client'

import { useContext, useEffect, useState } from "react"
import { calculateOnProductContext } from "@/context/CalculateOnProduct"

export default function NumberUnits() {
   const { productSelected, cantidadA, setCantidadA } = useContext(calculateOnProductContext)
   const [valueInput, setValueInput] = useState<number>(0)

   useEffect(() => {
      setValueInput(cantidadA)
   }, [cantidadA])

   const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      setCantidadA(value)
   }

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      setValueInput(value)
   }

   return (
      <div className="inline-flex flex-col gap-2">
         <div>
            <strong>
               {productSelected?.measurementUnit}
            </strong>
         </div>
         <div className="flex items-center gap-2">
            <input
               onChange={handleChange}
               onBlur={handleBlur}
               className="text-center border border-gray-500 rounded-lg w-20 h-8"
               value={valueInput}
            />
         </div>
      </div>
   )
}
