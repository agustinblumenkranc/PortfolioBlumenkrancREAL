const habilidades = [
  {
    categoria: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS"],
  },
  {
    categoria: "Herramientas",
    items: ["Git", "Figma", "VS Code", "Postman"],
  },
  {
    categoria: "Conocimientos",
    items: ["Testing", "UX/UI", "Accesibilidad"],
  },
]

export default function Competencias() {
  return (
    <section id="competencias" className="seccion-competencias">
      <h2 className="titulo-seccion">Competencias</h2>

      <div className="grid-competencias">
        {habilidades.map((grupo) => (
          <div key={grupo.categoria} className="tarjeta-competencia">
            <h3>{grupo.categoria}</h3>
            <ul className="lista-items">
              {grupo.items.map((item) => (
                <li key={item}>
                  <span className="punto">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
