'use client'

import Image from "next/image";
import { Product } from "@/types";
import Price from "./Price";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface CardProductProps {
   product: Product
}

interface CardProductCartProps {
   product: Product
   quantity: number
}

export const CardProduct = ({ product }: CardProductProps) => {
   const router = useRouter()

   const handlerClick = () => {
      router.push(`/product?id=${product.id}`)
   }

   return (
      <div className="flex flex-col border border-1 border-gray-200 h-[450px] rounded-md p-[10px] md:p-[15px] lg:p-[15px]">
         <div className="flex w-full h-[60%] p-10">
            <Image src={product.image} alt="" layout="responsive" width={10} height={10} />
         </div>
         <div className="flex flex-col flex-1 justify-around">
            <p className="text-neutral text-base sm:text-lg md:text-xl lg:text-lg xl:text-base">
               {product.title}
            </p>
            <Price product={product} />
            <Button title="Ver producto" intent="primary" handlerClick={handlerClick} />
         </div>
      </div>
   );
}



export const CardProductCart = ({ product, quantity }: CardProductCartProps) => {

   const {image, title} = product

   return (
      <div className="flex items-center justify-between border-b border-gray-200 py-4 px-4">
         <div className="w-[80px] h-[80px]">
            <Image src={image} alt={title} width={80} height={80} objectFit="cover" />
         </div>

         <div className="flex-1 ml-4">
            <span className="block text-sm font-medium text-gray-800">{title}</span>
            <span className="block text-xs text-gray-500">{`Cantidad: ${quantity}`}</span>
         </div>

         
         {/* `<div className="text-right">
            <span className="block text-xs text-gray-500">Subtotal</span>
            <span className="block text-lg font-semibold text-gray-800">${price * quantity}</span>
         </div> */}
`
      </div>
   );
};


