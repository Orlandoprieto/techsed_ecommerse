
interface Price{
   priceList?: number
   priceSale: number
   porcentaje?: number
}


export default function Price({ priceList, priceSale, porcentaje }: Price) {
   return (
      <div>
         <s className="text-gray-700 text-md">
            {"$" + priceList}
         </s>
         <div className="flex gap-3 items-center">
            <strong className="text-2xl text-dark">
               {"$" + priceSale}
            </strong>
            <span className="bg-secondary px-1 py-1 rounded-lg text-sm text-white">
               {porcentaje + "% OFF"}
            </span>
         </div>
      </div>
   )
}