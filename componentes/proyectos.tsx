"use client"

const proyectos = [
  {
    id: 1,
    nombre: "DogDreams",
    descripcion:
      "Aplicación web para adopción de mascotas. Desarrollada con React para conectar refugios con adoptantes de forma intuitiva.",
    tecnologias: ["React", "JavaScript", "CSS", "API REST"],
    enlace: "https://github.com/gaelmos/dogdreams",
  },
  {
    id: 2,
    nombre: "ExplorAR",
    descripcion:
      "Plataforma de reserva de actividades turísticas con interfaz intuitiva para explorar y reservar experiencias únicas.",
    tecnologias: ["React", "Next.js", "TypeScript", "CSS"],
    enlace: "https://github.com/agustinblumenkranc/ExplorAR-Front",
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion-proyectos">
      <h2 className="titulo-seccion">Proyectos Destacados</h2>

      <div className="grid-proyectos">
        {proyectos.map((proyecto) => (
          <a
            key={proyecto.id}
            href={proyecto.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="tarjeta-proyecto"
          >
            <div className="scan-line"></div>
            <div className="contenido-proyecto">
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="tecnologias">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="enlace-proyecto">Ver Código →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
