import StandCard from "./components/StandCard"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Link href={'https://uni.ueh.edu.mx/'} target="__blank" className="w-44">
        <img 
          src='https://uni.ueh.edu.mx/assets/logo/logo.png' 
          alt='Logo Euro' 
          className="w-full"
        />
      </Link>
      <h1 className="text-3xl uppercase text-center">
        foro día del ingeniero 2023
      </h1>
      <StandCard 
        img={'https://www.oplever.org.mx/wp-content/uploads/2018/08/logo-ople.jpg'}
        route={'/urna-electronica'}
      >
        urna electrónica
      </StandCard>
      <StandCard 
        img={'https://kinikmx.com/img/paneles-solares.png'} 
        route={'https://www.kinik.com.mx/'}
      >
        servicios kinik
      </StandCard>
    </>
  )
}
