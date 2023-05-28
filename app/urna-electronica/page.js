import Link from "next/link";

export default function Page(){
  return (
    <>
      <div className="w-44">
        <img 
          src="https://www.oplever.org.mx/wp-content/uploads/2018/08/logo-ople.jpg" 
          alt="Logo OPLE" 
          className="w-full"
        />
      </div>
      <section className="flex flex-col gap-8">
        <h1 className="text-2xl">Urna Electrónica</h1>
        <article className="flex flex-col gap-8 text-justify">
          <h2 className="text-xl">Introducción</h2>
          <p>
            En un mundo cada vez más conectado y tecnológico, es hora de llevar la democracia al siguiente nivel. Estamos emocionados de presentarles nuestra increíble Urna Electrónica, una solución innovadora diseñada para hacer que los procesos electorales sean más eficientes, seguros y accesibles que nunca.
          </p>
          <p>
            Nuestra Urna Electrónica combina la última tecnología en seguridad cibernética con un diseño intuitivo y amigable para el usuario. Ya no será necesario utilizar boletas de papel y contar manualmente los votos. Con solo unos pocos toques en la pantalla, los votantes podrán ejercer su derecho al voto de manera rápida y precisa.
          </p>
          <p>
            ¿Por qué elegir nuestra Urna Electrónica? Aquí te damos algunas razones:
          </p>
          <ul className="flex flex-col gap-8 list-disc">
            <li>
              Seguridad de vanguardia
            </li>
            <li>
              Facilidad de uso
            </li>
            <li>
              Mayor eficiencia
            </li>
            <li>
              Accesibilidad para todos
            </li>
            <li>
              Auditoría transparente
            </li>
          </ul>
          <p>
            En resumen, nuestra Urna Electrónica es el futuro de la democracia. Estamos comprometidos en proporcionar soluciones innovadoras que impulsen la participación ciudadana y garanticen elecciones justas y seguras.
          </p>
        </article>
        <Link href='/' className="bg-blue-500 rounded text-neutral-200 w-fit px-4 py-2">
          Regresar
        </Link>
      </section>
    </>
  )
}