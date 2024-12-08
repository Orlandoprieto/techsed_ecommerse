import Button from "@/components/Button";
import CounterDisplay from "@/components/CountDisplay";
import NumberUnits from "@/components/NumberUnits";
import Price from "@/components/Price";
import Image from "next/image";

export default function ProductDetails() {
   return (
      <div className="flex flex-col lg:max-w-[1200px] lg:flex-row">
         <div className="flex w-full p-10 lg:w-1/2">
            <Image src="/12611.jpg" alt="" height={0} width={0} layout="responsive"/>
         </div>
         <div className="flex flex-1 flex-col gap-5">
            <strong className="text-2xl">Ladrillo hueco 8cm x 18cm x 33cm (pallet de 198u)</strong>
            <Price priceList={350000} priceSale={300000} porcentaje={20}/>
            <div className="flex gap-10">
               <NumberUnits/>
               <CounterDisplay />
            </div>
            <Button intent="primary" title="Agregar al carrito"/>
            <Button title="Eliminar del carrito"/>
         </div>
      </div>
   )
}