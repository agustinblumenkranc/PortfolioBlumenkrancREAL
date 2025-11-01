const datosContacto = [
  { tipo: "Email", valor: "agustinblume@gmail.com", enlace: "mailto:agustinblume@gmail.com" },
  { tipo: "Teléfono", valor: "+54 9 11 68795783", enlace: "tel:+5491168795783" },
  { tipo: "GitHub", valor: "github.com/agustinblumenkranc", enlace: "https://github.com/agustinblumenkranc" },
  {
    tipo: "LinkedIn",
    valor: "Agustín Blumenkranc",
    enlace: "https://www.linkedin.com/in/agust%C3%ADn-blumenkranc-7b06a526a/",
  },
]

export default function SeccionContacto() {
  return (
    <section id="contacto" className="seccion-contacto">
      <h2 className="titulo-seccion">Contacto</h2>

      <div className="contenedor-contacto">
        {datosContacto.map((dato) => (
          <a key={dato.tipo} href={dato.enlace} target="_blank" rel="noopener noreferrer" className="tarjeta-contacto">
            <span className="etiqueta-contacto">{dato.tipo}</span>
            <span className="valor-contacto">{dato.valor}</span>
            <span className="icono-enlace">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
