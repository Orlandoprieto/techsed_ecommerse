import { Product } from "@/types"

export const products: Product[] = [
   {
      image: "/pallet.webp",
      id: 100012,
      title: "Ladrillo hueco 8cm x 18cm x 33cm (Pallet de 198u)",
      description: "Ladrillo hueco 8cm x 18cm x 33cm - Pallet: 198 unidades",
      price: 60588,
      listingPrice: 67320,
      stock: 7,
      salesUnit: "pallets",
      measurementUnit: "unidades",
      unitValue: 198,
   },
   {
      image: "/ceramica.png",
      id: 2060,
      title: "Ceramico Azabache 20Und 36X36 1ra 2,68 m2 por Caja",
      description: "Ceramica esmaltada36x36, terminacion brillante, transito medio, liso, Colores disponibles: Negro",
      price: 13031,
      stock: 12,
      salesUnit: "cajas",
      measurementUnit: "superficie",
      unitValue: 2.68,
   },
   {
      image: "/varilla.png",
      id: 10035,
      title: "Hierro 25 mm x 12 m Acindar",
      description: "HIERRO 25 MM X 12M",
      price: 76293,
      listingPrice: 89757,
      stock: 20,
      salesUnit: "unidad",
   }
]