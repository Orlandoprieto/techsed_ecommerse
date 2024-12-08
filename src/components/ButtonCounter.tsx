import Image from "next/image";

interface src {
   image: "/add-circle-outline.svg" | "/remove-circle-outline.svg"
   handlerClick?: () => void
} 

export default function ButtonCounter({ image, handlerClick }: src){
   return (
      <button className="flex justify-center items-center bg-primary rounded-lg w-[35px] h-full" onClick={handlerClick}>
         <Image src={image} alt="" width={25} height={25}/>
      </button>
   )
}