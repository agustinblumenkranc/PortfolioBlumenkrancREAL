const habilidades = {
  frontend: ["React", "Next.js", "HTML", "CSS"],
  herramientas: ["Git", "Figma", "VS Code", "Postman"],
  conocimientos: ["Testing", "UX/UI", "Accesibilidad"],
}

export default function SeccionCompetencias() {
  return (
    <section id="habilidades" className="seccion-competencias">
      <h2 className="titulo-seccion">Habilidades</h2>

      <div className="contenedor-competencias">
        <div className="grupo-competencias">
          <h3 className="subtitulo-competencias">Tecnologías Frontend</h3>
          <div className="items-competencias">
            {habilidades.frontend.map((skill) => (
              <span key={skill} className="item-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grupo-competencias">
          <h3 className="subtitulo-competencias">Herramientas</h3>
          <div className="items-competencias">
            {habilidades.herramientas.map((skill) => (
              <span key={skill} className="item-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grupo-competencias">
          <h3 className="subtitulo-competencias">Conocimientos</h3>
          <div className="items-competencias">
            {habilidades.conocimientos.map((skill) => (
              <span key={skill} className="item-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
