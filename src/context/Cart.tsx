'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Product = {
   id: number;
   title: string;
   description: string;
   price: number;
   listingPrice?: number;
   stock: number;
   salesUnit: 'pallets' | 'cajas' | 'unidad';
   measurementUnit?: 'superficie' | 'metros' | 'unidades';
   unitValue?: number;
};

export type CartItem = {
   product: Product;
   quantity: number;
};

export type CartState = {
   items: CartItem[];
};

const initialState: CartState = {
   items: [],
};

export const CartContext = createContext<{
   state: CartState;
   addItem: (product: Product, quantity: number) => void;
   removeItem: (productId: number) => void;
   updateQuantity: (productId: number, quantity: number) => void;
   clearCart: () => void;
}>({
   state: initialState,
   addItem: () => { },
   removeItem: () => { },
   updateQuantity: () => { },
   clearCart: () => { },
});

export function CartProvider({ children }: { children: ReactNode }) {
   const [state, setState] = useState<CartState>(initialState);

   useEffect(() => {
      console.log(state)
   }, [state])

   const addItem = (product: Product, quantity: number) => {

      if (quantity > product.stock) {
         alert("No puedes agregar más unidades. Stock disponible: " + product.stock);
         return;
      }

      const existingItem = state.items.find((item) => item.product.id === product.id);
      if (existingItem) {
         const newQuantity = existingItem.quantity + quantity;
         if (newQuantity > product.stock) {
            alert("No puedes agregar más unidades de las disponibles en stock.");
            return;
         }

         const a = {
            ...state,
            items: state.items.map((item) =>
               item.product.id === product.id
                  ? { ...item, quantity: newQuantity }
                  : item
            ),
         };

         setState(a)
         return
      }

      setState((prevState) => {
         return {
            ...prevState,
            items: [...prevState.items, { product, quantity }],
         };
      });
   };

   const removeItem = (productId: number) => {
      setState((prevState) => ({
         ...prevState,
         items: prevState.items.filter((item) => item.product.id !== productId),
      }));
   };

   const updateQuantity = (productId: number, quantity: number) => {
      setState((prevState) => ({
         ...prevState,
         items: prevState.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
         ),
      }));
   };

   const clearCart = () => {
      setState(initialState);
   };

   return (
      <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
         {children}
      </CartContext.Provider>
   );
}

