import CardProduct from "./CardProduct";
import { Product } from "@/types";

export default function ProductsContainer() {
   const products: Product[] = [
      {
         id: "2",
         title: "Cemento Portland",
         description: "Bolson de cemento 50kg para construcción.",
         price: 1500,
         stock: 200,
         salesUnit: "unit",
         measurementUnit: "bolson",
         unitValue: 50,
      },
      {
         id: "3",
         title: "Arena Fina",
         description: "Arena para mezcla en construcción.",
         price: 2000,
         stock: 300,
         salesUnit: "area",
         measurementUnit: "m2",
         unitValue: 1,
      },
      {
         id: "4",
         title: "Hierro para Hormigón",
         description: "Barra de hierro de 12 metros.",
         price: 3500,
         stock: 150,
         salesUnit: "unit",
         measurementUnit: "m",
         unitValue: 12,
      },
      {
         id: "5",
         title: "Cerámica Roja",
         description: "Caja de cerámicas de 1.5m².",
         price: 4000,
         stock: 100,
         salesUnit: "group",
         measurementUnit: "m2",
         unitValue: 1.5,
      },
      {
         id: "6",
         title: "Cal Hidratada",
         description: "Bolsa de 25kg de cal hidratada.",
         price: 800,
         stock: 400,
         salesUnit: "unit",
         measurementUnit: "bolson",
         unitValue: 25,
      },
      {
         id: "7",
         title: "Mosaico Granítico",
         description: "Paquete de mosaicos de 2m².",
         price: 6000,
         listingPrice: 5500,
         stock: 50,
         salesUnit: "group",
         measurementUnit: "m2",
         unitValue: 2,
      },
      {
         id: "8",
         title: "Grava",
         description: "Bolson de grava para construcción.",
         price: 2500,
         stock: 500,
         salesUnit: "unit",
         measurementUnit: "bolson",
         unitValue: 1,
      },
      {
         id: "9",
         title: "Pintura Látex",
         description: "Balde de 20 litros de pintura blanca.",
         price: 4000,
         stock: 100,
         salesUnit: "unit",
         unitValue: 20,
      },
      {
         id: "10",
         title: "Vidrio Templado",
         description: "Panel de vidrio de 1.5m².",
         price: 5000,
         stock: 30,
         salesUnit: "unit",
         measurementUnit: "m2",
         unitValue: 1.5,
      }
   ];


   return (
      <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[1200px]">
         {products.map(product => <CardProduct key={"product" + product.id} product={product} />)}
      </div>
   )
}