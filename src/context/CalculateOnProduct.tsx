'use client'

import { Product } from '@/types'
import React, { useEffect, useState, createContext, useContext } from 'react'

interface ICalculateOnProductContext {
   setProducOnCalculate: (product: Product) => void,
   productSelected: null | Product,
   cantidadA: number,
   cantidadB: number,
   setCantidadA: (cantidad: number) => void,
   setCantidadB: (cantidad: number) => void,

}

export const calculateOnProductContext = createContext<ICalculateOnProductContext>({
   setProducOnCalculate: (product: Product) => {},
   productSelected: null,
   cantidadA: 0,
   setCantidadA: (cantidad: number) => {},
   setCantidadB: (cantidad: number) => {},
   cantidadB: 0,
   
});

interface CalculateOnProductProps {
   children: React.ReactNode
}

export default function CalculateOnProduct({ children }: CalculateOnProductProps) {
   const [productSelected, setProductSelected] = useState<Product | null>(null);
   const [cantidadA, setCantidadA] = useState<number>(0);
   const [cantidadB, setCantidadB] = useState<number>(0);

   useEffect(() => {
      if (productSelected?.unitValue != null) {
         setCantidadA(productSelected.unitValue);
      }
   }, [productSelected]);

   useEffect(() => {
      if (productSelected?.unitValue && cantidadB !== 0) {
         const total = Number((productSelected.unitValue * cantidadB).toFixed(2));
         if (cantidadA !== total) {
            setCantidadA(total);
         }
      }
   }, [cantidadB, productSelected?.unitValue]);

   useEffect(() => {
      if (productSelected?.unitValue && cantidadA !== 0) {
         const value = Number(Math.ceil(cantidadA / productSelected.unitValue).toFixed());
         if (cantidadB !== value) {
            setCantidadB(value);
         }
      }
   }, [cantidadA, productSelected?.unitValue]);

   const setProducOnCalculate = (product: Product) => {
      setProductSelected(product);
   };

   
   return (
      <calculateOnProductContext.Provider value={{
         setProducOnCalculate,
         productSelected,
         cantidadA,
         cantidadB,
         setCantidadA,
         setCantidadB,
      }}>
         {children}
      </calculateOnProductContext.Provider>
   );
}
