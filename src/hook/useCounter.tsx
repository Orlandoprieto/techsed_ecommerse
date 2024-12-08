'use client'

import { useState } from "react";

type range = {
   min: number
   max: number
}

export default function useCounter(rango: range) {
   const [counter, setCounter] = useState<number>(0)

   const increment = () => {
      setCounter( value => {
         if (counter == rango.max) return value
         return value + 1
      })
   }

   const decrement = () => {
      setCounter( value => {
         if (counter == rango.min) return value
         return value - 1
      })
   }

   const setValue = (value: number) => {
      setCounter(value)
   }

   return { counter, increment, decrement, setValue}
}