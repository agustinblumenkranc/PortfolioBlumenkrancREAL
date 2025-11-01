import Sidebar from "@/componentes/sidebar"
import Contenido from "@/componentes/contenido"

export default function Pagina() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Contenido />
    </div>
  )
}
