"use client"

export default function Contacto() {
  const contactos = [
    { tipo: "Email", valor: "agustinblume@gmail.com", enlace: "mailto:agustinblume@gmail.com" },
    { tipo: "Teléfono", valor: "+54 9 11 6879-5783", enlace: "tel:+5491168795783" },
    { tipo: "GitHub", valor: "github.com/agustinblumenkranc", enlace: "https://github.com/agustinblumenkranc" },
    {
      tipo: "LinkedIn",
      valor: "Agustín Blumenkranc",
      enlace: "https://www.linkedin.com/in/agustín-blumenkranc-7b06a526a/",
    },
  ]

  return (
    <section id="contacto" className="seccion-contacto">
      <h2 className="titulo-seccion">Contacto</h2>

      <div className="animacion-ceradura">
        <div className="ceradura"></div>
      </div>

      <div className="lista-contacto">
        {contactos.map((contacto) => (
          <a
            key={contacto.tipo}
            href={contacto.enlace}
            target={contacto.enlace.startsWith("http") ? "_blank" : "_self"}
            rel={contacto.enlace.startsWith("http") ? "noopener noreferrer" : ""}
            className="item-contacto"
          >
            <span className="etiqueta">{contacto.tipo}</span>
            <span className="valor">{contacto.valor}</span>
            <span className="flecha">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
