'use clietn'

import { useState, useEffect, useContext } from 'react'
import { CartContext } from '@/context/Cart'
import { CardProductCart } from './CardProduct'

export default function CartContainer() {
   const { state } = useContext(CartContext)

   return (
      <div className="absolute top-[50px] right-0 bg-white shadow-lg rounded-md border border-gray-300 p-4 w-[400px]">
         <h2 className="text-lg font-bold mb-4">Carrito de Compras</h2>
         <div>
            {(state.items.length > 0) ? (
               state.items.map(prod => (
                  <CardProductCart
                     key={prod.product.title + prod.product.id}
                     product={prod.product}
                     quantity={prod.quantity}
                     
                  />
               ))
            ) : (
               <span>Carrito vacio</span>
            )}
         </div>
      </div>
   )
}