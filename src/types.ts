export type Product = {
   id: number,
   title: string,
   description: string,
   price: number,
   listingPrice?: number,
   stock: number,
   salesUnit: "group" | "unit" | "area",
   measurementUnit?: "m2" | "m" | "pallet" | "bolson",
   unitValue?: number,
}

