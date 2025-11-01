export default function SeccionInicio() {
  return (
    <section id="inicio" className="seccion-inicio">
      <div className="contenedor-inicio">
        <div className="animacion-fondo"></div>
        <h1 className="titulo-principal">Agustín Blumenkranc</h1>
        <p className="subtitulo">Desarrollador Frontend</p>
        <p className="descripcion">
          Especializado en React y Next.js. Apasionado por crear interfaces limpias y accesibles. Futuro especialista en
          ciberseguridad.
        </p>
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
