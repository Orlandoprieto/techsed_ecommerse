import { cva, type VariantProps } from "class-variance-authority"

const buttonvariants = cva("button", {
   variants: {
      intent: {
         primary: [
            "bg-secondary",
            "text-white",
            "h-[45px] rounded-xl",
         ],
         secondary: [
            "border border-1 border-secondary",
            "text-secondary", 
            "h-[45px] rounded-xl",
         ]
      },
   },
   defaultVariants: {
      intent: "secondary"
   }
})

interface ButtonProps extends VariantProps<typeof buttonvariants> {
   title: string
   handlerClick?: () => void
}

export default function Button({title, intent, handlerClick}: ButtonProps) {
   return (
      <button 
         onClick={handlerClick} 
         className={buttonvariants({intent})}
      >
         <strong>
            {title}
         </strong>
      </button>
   )
}