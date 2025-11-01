export default function HeaderNavegacion() {
  return (
    <header className="header-nav">
      <nav className="contenedor-nav">
        <a href="#inicio" className="logo">
          AB
        </a>
        <ul className="enlaces-nav">
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
