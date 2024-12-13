import { Product } from "@/types"

interface PriceProps{
   product: Product
}


export default function Price({ product }: PriceProps) {
   const {price, listingPrice} = product

   return (
      <div>
         <s className="text-gray-700 text-md">
            {"$" + listingPrice}
         </s>
         <div className="flex gap-3 items-center">
            <strong className="text-2xl text-dark">
               {"$" + price}
            </strong>
            
            {listingPrice && (
               <span className="bg-secondary px-1 py-1 rounded-lg text-sm text-white">
                  {((listingPrice - price) / listingPrice * 100).toFixed() + "%"}
            </span>
            )}
         </div>
      </div>
   )
}