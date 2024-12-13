'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartContainer from "./CartContainer";
import { CartProvider } from "@/context/Cart";

export default function Header() {
   const [showCart, setShowCart] = useState(false);

   const toggleCart = () => {
      setShowCart((prev) => !prev);
   };

   return (
         <header className="flex h-[80px] justify-center relative">
            <div className="flex justify-between items-center w-full">
               <Link href="/">
                  <Image src="/Logo.svg" alt="Logo" width={180} height={180} />
               </Link>

               <div className="relative">
                  <button
                     onClick={toggleCart}
                     className="flex justify-center items-center bg-primary w-[45px] h-[45px] rounded-full"
                  >
                     <Image src="/cart-outline.svg" alt="Cart Icon" width={25} height={25} />
                  </button>

                  {showCart && (
                     <CartContainer />
                  )}
               </div>
            </div>
         </header>
   );
}
