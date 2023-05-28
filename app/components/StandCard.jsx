import Link from "next/link"

export default function StandCard({ img, route, children}){

  return (
    <div 
      className="relative max-w-xs w-3/4 bg-black rounded shadow-xl
      overflow-hidden text-neutral-200 hover:text-neutral-50 
      transition-all ease-in"
    >
      <Link 
        href={ route }
      >
        <img 
          src={img} 
          alt={img} 
          className="w-full h-56 opacity-40 hover:opacity-30 transition-all
          object-cover" 
        />
        <span className="absolute top-1/2 left-0 right-0 mx-auto w-fit 
          text-xl lg:text-3xl uppercase"
        >
          { children }
        </span>
      </Link>
    </div>
  )
}