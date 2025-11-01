"use client"

import { useState } from "react"

export default function Navegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const enlaces = [
    { texto: "Acerca de", href: "#inicio" },
    { texto: "Proyectos", href: "#proyectos" },
    { texto: "Competencias", href: "#competencias" },
    { texto: "Contacto", href: "#contacto" },
  ]

  return (
    <nav className="navegacion">
      <div className="contenedor-navegacion">
        <a href="#inicio" className="logo">
          {"< AB />"}
        </a>

        <button
          className="boton-menu"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú"
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`enlaces ${menuAbierto ? "abierto" : ""}`}>
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a href={enlace.href} onClick={() => setMenuAbierto(false)}>
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
