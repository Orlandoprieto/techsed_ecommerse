
interface Price{
   priceList?: number
   priceSale: number
}


export default function Price({ priceList, priceSale }: Price) {
   return (
      <div>
         <s className="text-gray-700 text-md">
            {"$" + priceList}
         </s>
         <div className="flex gap-3 items-center">
            <strong className="text-2xl text-dark">
               {"$" + priceSale}
            </strong>
            
            {priceList && (
               <span className="bg-secondary px-1 py-1 rounded-lg text-sm text-white">
                  {((priceList - priceSale) / priceList * 100).toFixed() + "%"}
            </span>
            )}
         </div>
      </div>
   )
}