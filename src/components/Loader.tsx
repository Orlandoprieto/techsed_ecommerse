import { MoonLoader } from 'react-spinners'

export default function Loader() {
   return (
      <div className="flex justify-center items-center w-screen h-screen">
         <MoonLoader
            color="blue"
            size={40}
         />
      </div>
   )
}