'use client'

import Image from "next/image";
import { Product } from "@/types";
import Price from "./Price";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface CardProductProps {
   product: Product
}

export default function CardProduct({ product }: CardProductProps) {
   const router = useRouter()

   const handlerClick = () => {
      router.push(`/product?id=${product.id}`)
   }

   return (
      <div className="flex flex-col border border-1 border-gray-200 h-[450px] rounded-md p-[10px] md:p-[15px] lg:p-[15px]">
         <div className="flex w-full h-[60%] p-10">
            <Image src="/12611.jpg" alt="" layout="responsive" width={10} height={10} />
         </div>
         <div className="flex flex-col flex-1 justify-around">
            <p className="text-neutral text-base sm:text-lg md:text-xl lg:text-lg xl:text-base">
               {product.title}
            </p>
            <Price priceList={product.listingPrice} priceSale={product.price}/>
            <Button title="Ver producto" intent="primary" handlerClick={handlerClick}/>
         </div>
      </div>
   );
}
