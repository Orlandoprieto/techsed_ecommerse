import Image from "next/image";
import Link from "next/link";

export default function Header() {
   return (
      <header className="flex h-[80px] justify-center">
         <div className="flex justify-between items-center w-full">
            <Link href="/">
               <Image src="/Logo.svg" alt="" width={180} height={180}/>
            </Link>

            <button className="flex justify-center items-center bg-primary w-[45px] h-[45px] rounded-full">
               <Image src="/cart-outline.svg" alt="" width={25} height={25}/>
            </button>
         </div>
      </header>
   )
}