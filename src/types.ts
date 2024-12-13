export type Product = {
   id: number,
   title: string,
   description: string,
   price: number,
   listingPrice?: number,
   stock: number,
   salesUnit: "pallets" | "cajas" | "unidad",
   measurementUnit?: "superficie" | "metros" | "unidades",
   unitValue?: number,
}

