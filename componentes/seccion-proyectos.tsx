const proyectos = [
  {
    id: 1,
    titulo: "DogDreams",
    descripcion: "App de adopción de mascotas con interfaz intuitiva y sistema de búsqueda avanzado.",
    tecnologias: ["React", "Next.js", "HTML", "CSS"],
    enlace: "https://github.com/gaelmos/dogdreams",
  },
  {
    id: 2,
    titulo: "ExplorAR",
    descripcion: "Plataforma de reserva de actividades turísticas con sistema de gestión completo.",
    tecnologias: ["React", "HTML", "CSS", "Git"],
    enlace: "https://github.com/agustinblumenkranc/ExplorAR-Front",
  },
]

export default function SeccionProyectos() {
  return (
    <section id="proyectos" className="seccion-proyectos">
      <h2 className="titulo-seccion">Proyectos</h2>
      <div className="contenedor-proyectos">
        {proyectos.map((proyecto) => (
          <a
            key={proyecto.id}
            href={proyecto.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="tarjeta-proyecto"
          >
            <div className="contenedor-tarjeta">
              <h3 className="titulo-proyecto">{proyecto.titulo}</h3>
              <p className="descripcion-proyecto">{proyecto.descripcion}</p>
              <div className="tecnologias-proyecto">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="etiqueta-tech">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="enlace-proyecto">Ver en GitHub →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
