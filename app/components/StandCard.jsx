import Link from "next/link"

export default function StandCard({ img, route, children}){

  return (
    <div 
      className="relative max-w-sm bg-black rounded shadow-xl
      overflow-hidden text-neutral-200 hover:text-neutral-50 
      transition-all ease-in"
    >
      <Link 
        href={ route }
      >
        <img 
          src={img} 
          alt={img} 
          className="w-full opacity-40 hover:opacity-30 transition-all" 
        />
        <span className="absolute top-1/2 left-0 right-0 mx-auto w-fit 
          text-3xl uppercase"
        >
          { children }
        </span>
      </Link>
    </div>
  )
}