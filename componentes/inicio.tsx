"use client"

import { useEffect, useState } from "react"

export default function Inicio() {
  const [texto, setTexto] = useState("")
  const textoCompleto = "Hola, soy Agustín Blumenkranc"

  useEffect(() => {
    let indice = 0
    const intervalo = setInterval(() => {
      if (indice <= textoCompleto.length) {
        setTexto(textoCompleto.substring(0, indice))
        indice++
      } else {
        clearInterval(intervalo)
      }
    }, 50)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <section id="inicio" className="seccion-inicio">
      <div className="animacion-fondo">
        <div className="red-cibernetica"></div>
        <div className="particulas-codifico"></div>
      </div>

      <div className="contenido-inicio">
        <h1 className="titulo-inicio">
          {texto}
          <span className="cursor"></span>
        </h1>

        <p className="subtitulo">Desarrollador Frontend apasionado por crear interfaces elegantes y funcionales.</p>
        <p className="descripcion">Especializado en React y Next.js. Futuro especialista en Ciberseguridad.</p>

        <div className="botones-inicio">
          <a href="#proyectos" className="boton boton-primario">
            Ver Proyectos
          </a>
          <a href="#contacto" className="boton boton-secundario">
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
