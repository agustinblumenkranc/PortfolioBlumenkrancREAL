"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface CodigoAnimado {
  id: string
  x: number
  y: number
  texto: string
  tipo: "binario" | "lluvia" | "destello" | "matriz" | "brillo"
}

interface Particula {
  id: string
  x: number
  y: number
  vx: number
  vy: number
}

export default function Contenido() {
  const [codigos, setCodigos] = useState<CodigoAnimado[]>([])
  const [mouseGlow, setMouseGlow] = useState({ x: 0, y: 0 })
  const [particulas, setParticulas] = useState<Particula[]>([])
  const [clickPulsos, setClickPulsos] = useState<Array<{ id: string; x: number; y: number }>>([])

  useEffect(() => {
    const frases = [
      "01010110",
      "11000101",
      "10101010",
      "11111100",
      "10001001",
      "const verify = true",
      "socket.lock = true",
      "access_granted",
      "encryption: SHA256",
      "proxy.connect()",
      "firewall.active",
      "JWT_verified",
      "02X9Z3K",
      "SCANNING...",
      "ACK",
      "0xFFEE44",
      "SECURE",
      "SYSTEM.CHECK",
      "DEBUG_MODE",
      "NODE.EXEC",
    ]

    const generarCodigo = () => {
      const id = Math.random().toString(36).substr(2, 9)
      const x = Math.random() * 80 + 10
      const y = Math.random() * 60 + 20
      const texto = frases[Math.floor(Math.random() * frases.length)]
      const tipos: ("binario" | "lluvia" | "destello" | "matriz" | "brillo")[] = [
        "binario",
        "lluvia",
        "destello",
        "matriz",
        "brillo",
      ]
      const tipo = tipos[Math.floor(Math.random() * tipos.length)]

      setCodigos((prev) => [...prev.slice(-8), { id, x, y, texto, tipo }])

      setTimeout(() => {
        setCodigos((prev) => prev.filter((c) => c.id !== id))
      }, 8000)
    }

    const intervalo = setInterval(generarCodigo, 1500)
    return () => clearInterval(intervalo)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGlow({ x: e.clientX, y: e.clientY })

      if (Math.random() > 0.7) {
        const id = Math.random().toString(36).substr(2, 9)
        const vx = (Math.random() - 0.5) * 3
        const vy = (Math.random() - 0.5) * 3

        setParticulas((prev) => [...prev.slice(-20), { id, x: e.clientX, y: e.clientY, vx, vy }])

        setTimeout(() => {
          setParticulas((prev) => prev.filter((p) => p.id !== id))
        }, 1500)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleClick = (e: MouseEvent) => {
    const id = Math.random().toString(36).substr(2, 9)
    setClickPulsos((prev) => [...prev.slice(-5), { id, x: e.clientX, y: e.clientY }])

    setTimeout(() => {
      setClickPulsos((prev) => prev.filter((p) => p.id !== id))
    }, 1000)
  }

  useEffect(() => {
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [])

  return (
    <main style={styles.main}>
      <style>{`
        @keyframes flotarCodigo {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: translateY(-60px) scale(0.6);
          }
        }

        @keyframes lluvia {
          0% {
            transform: translateY(-100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh) translateX(30px);
            opacity: 0;
          }
        }

        @keyframes destello {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.3);
          }
        }

        @keyframes matrizCodigo {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes brilloNeon {
          0%, 100% {
            text-shadow: 0 0 5px rgba(0, 255, 136, 0.5), 0 0 10px rgba(0, 255, 136, 0.3);
          }
          50% {
            text-shadow: 0 0 10px rgba(0, 255, 136, 0.8), 0 0 20px rgba(0, 255, 136, 0.6), 0 0 30px rgba(0, 255, 136, 0.4);
          }
        }

        .codigo-binario {
          animation: flotarCodigo 8s ease-out forwards;
        }

        .codigo-lluvia {
          animation: lluvia 8s ease-in forwards;
        }

        .codigo-destello {
          animation: destello 8s ease-out forwards;
        }

        .codigo-matriz {
          animation: matrizCodigo 8s ease-in forwards;
          font-weight: bold;
        }

        .codigo-brillo {
          animation: brilloNeon 8s ease-out forwards;
        }

        @keyframes particulaFlotante {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--vx), var(--vy)) scale(0);
            opacity: 0;
          }
        }

        .particula {
          animation: particulaFlotante 1.5s ease-out forwards;
        }

        @keyframes pulsoClick {
          0% {
            transform: scale(0);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.8);
          }
          100% {
            transform: scale(1);
            opacity: 0;
            box-shadow: 0 0 0 30px rgba(0, 255, 136, 0);
          }
        }

        .pulso {
          animation: pulsoClick 1s ease-out forwards;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          left: mouseGlow.x - 200,
          top: mouseGlow.y - 200,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.08) 0%, rgba(0, 255, 136, 0.03) 40%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
          transition: "all 0.15s ease-out",
          boxShadow: "inset 0 0 60px rgba(0, 255, 136, 0.1)",
        }}
      />

      <div style={styles.contenedorCodigos}>
        {particulas.map((particula) => (
          <div
            key={particula.id}
            className="particula"
            style={
              {
                position: "absolute",
                left: particula.x,
                top: particula.y,
                width: "6px",
                height: "6px",
                background: "rgba(0, 255, 136, 0.8)",
                borderRadius: "50%",
                boxShadow: "0 0 8px rgba(0, 255, 136, 0.6)",
                pointerEvents: "none",
                "--vx": `${particula.vx * 60}px`,
                "--vy": `${particula.vy * 60}px`,
              } as React.CSSProperties
            }
          />
        ))}

        {clickPulsos.map((pulso) => (
          <div
            key={pulso.id}
            className="pulso"
            style={{
              position: "absolute",
              left: pulso.x,
              top: pulso.y,
              width: "1px",
              height: "1px",
              borderRadius: "50%",
              border: "2px solid rgba(0, 255, 136, 0.8)",
              pointerEvents: "none",
            }}
          />
        ))}

        {codigos.map((codigo) => (
          <div
            key={codigo.id}
            className={`codigo-${codigo.tipo}`}
            style={{
              ...styles.codigoFlotante,
              left: `${codigo.x}%`,
              top: `${codigo.y}%`,
            }}
          >
            {codigo.texto}
          </div>
        ))}
      </div>

      <section id="acerca" style={styles.seccion}>
        <h2 style={styles.tituloSeccion}>Acerca de</h2>
        <div style={styles.textoContenedor}>
          <p style={styles.parrafo}>
            Soy un desarrollador frontend apasionado por crear interfaces accesibles y pixel-perfect que combinen diseño
            reflexivo con ingeniería robusta. Mi trabajo favorito se encuentra en la intersección entre diseño y
            desarrollo, creando experiencias que no solo se ven bien sino que están meticulosamente construidas para
            rendimiento y usabilidad.
          </p>

          <p style={styles.parrafo}>
            Especializado en React y Next.js, creo aplicaciones web modernas con atención al detalle. Contribuyo a
            mantener estándares altos de accesibilidad y seguridad en cada proyecto, asegurando que las experiencias
            sean inclusivas y protegidas para todos los usuarios.
          </p>

          <p style={styles.parrafo}>
            Estudio ciberseguridad en paralelo a mi desarrollo frontend, lo que me permite integrar mejores prácticas de
            seguridad en cada línea de código que escribo. Mi enfoque es crear software limpio, mantenible y seguro.
          </p>
        </div>
      </section>

      <section id="experiencia" style={styles.seccion}>
        <h2 style={styles.tituloSeccion}>Habilidades</h2>

        <div style={styles.gridHabilidades}>
          {[
            { titulo: "Frontend", items: ["React", "Next.js", "HTML / CSS"] },
            { titulo: "Herramientas", items: ["Git", "Figma", "Postman"] },
            { titulo: "Conocimientos", items: ["Testing", "UX / UI", "Accesibilidad"] },
          ].map((grupo, idx) => (
            <div
              key={idx}
              style={styles.tarjetaHabilidad}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement
                target.style.borderColor = "rgba(0, 255, 136, 0.6)"
                target.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.2), inset 0 0 10px rgba(0, 255, 136, 0.05)"
                target.style.background = "rgba(0, 255, 136, 0.05)"
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement
                target.style.borderColor = "rgba(0, 255, 136, 0.1)"
                target.style.boxShadow = "none"
                target.style.background = "rgba(0, 255, 136, 0.02)"
              }}
            >
              <h3 style={styles.subtitulo}>{grupo.titulo}</h3>
              <ul style={styles.lista}>
                {grupo.items.map((item, i) => (
                  <li key={i} style={styles.itemLista}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" style={styles.seccion}>
        <h2 style={styles.tituloSeccion}>Proyectos</h2>

        <div style={styles.contenedorProyectos}>
          {[
            {
              num: "01",
              nombre: "DogDreams",
              descripcion:
                "Aplicación web para adopción de mascotas. Desarrollada con React para conectar refugios con adoptantes de forma intuitiva y segura.",
              tags: ["React", "JavaScript", "CSS"],
              link: "https://github.com/gaelmos/dogdreams",
            },
            {
              num: "02",
              nombre: "ExplorAR",
              descripcion:
                "Plataforma de reserva de actividades turísticas con interfaz intuitiva para explorar y reservar experiencias únicas con seguridad de datos garantizada.",
              tags: ["React", "Next.js", "TypeScript"],
              link: "https://github.com/agustinblumenkranc/ExplorAR-Front",
            },
          ].map((proyecto, idx) => (
            <div
              key={idx}
              style={styles.tarjetaProyecto}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement
                target.style.borderColor = "rgba(0, 255, 136, 0.5)"
                target.style.background = "rgba(0, 255, 136, 0.08)"
                target.style.boxShadow = "0 0 20px rgba(0, 255, 136, 0.15), inset 0 0 15px rgba(0, 255, 136, 0.05)"
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement
                target.style.borderColor = "rgba(0, 255, 136, 0.1)"
                target.style.background = "rgba(0, 255, 136, 0.02)"
                target.style.boxShadow = "none"
              }}
            >
              <div style={styles.escaneo}></div>
              <div style={styles.contenidoProyecto}>
                <div style={styles.numeroProyecto}>{proyecto.num}</div>
                <h3 style={styles.nombreProyecto}>{proyecto.nombre}</h3>
                <p style={styles.descripcionProyecto}>{proyecto.descripcion}</p>
                <div style={styles.tags}>
                  {proyecto.tags.map((tag, i) => (
                    <span key={i} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.enlaceProyecto}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLAnchorElement
                    target.style.textShadow = "0 0 10px rgba(0, 255, 136, 0.8)"
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLAnchorElement
                    target.style.textShadow = "none"
                  }}
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" style={styles.seccion}>
        <h2 style={styles.tituloSeccion}>Contacto</h2>
        <p style={styles.textoContacto}>
          ¿Interesado en trabajar juntos? No dudes en contactarme. Siempre estoy abierto a nuevas oportunidades.
        </p>
        <div style={styles.botonesContacto}>
          {[
            { href: "mailto:agustinblume@gmail.com", label: "Enviar Email" },
            {
              href: "https://www.linkedin.com/in/agustín-blumenkranc-7b06a526a/",
              label: "LinkedIn",
              target: "_blank",
            },
          ].map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              target={btn.target}
              rel={btn.target ? "noopener noreferrer" : undefined}
              style={styles.botonContacto}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.borderColor = "rgba(0, 255, 136, 0.8)"
                target.style.background = "rgba(0, 255, 136, 0.1)"
                target.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.4), inset 0 0 10px rgba(0, 255, 136, 0.1)"
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.borderColor = "rgba(0, 255, 136, 0.2)"
                target.style.background = "rgba(0, 255, 136, 0.05)"
                target.style.boxShadow = "none"
              }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

const styles = {
  main: {
    marginLeft: "300px",
    padding: "100px 80px 100px 80px",
    color: "#8892b0",
    fontSize: "16px",
    lineHeight: "1.6",
    position: "relative" as const,
  },
  contenedorCodigos: {
    position: "fixed" as const,
    inset: 0,
    pointerEvents: "none" as const,
    overflow: "hidden",
    zIndex: 0,
  },
  codigoFlotante: {
    position: "absolute" as const,
    fontSize: "10px",
    fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
    color: "#00ff88",
    textShadow: "0 0 10px rgba(0, 255, 136, 0.5), 0 0 20px rgba(0, 255, 136, 0.3)",
    whiteSpace: "nowrap" as const,
    opacity: 0.6,
    fontWeight: 500,
    letterSpacing: "1px",
  },
  seccion: {
    marginBottom: "80px",
    position: "relative" as const,
    zIndex: 10,
  },
  tituloSeccion: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "30px",
    letterSpacing: "-0.5px",
    paddingBottom: "15px",
    borderBottom: "1px solid rgba(0, 255, 136, 0.2)",
    animation: "glow-pulse 4s ease-in-out infinite",
  },
  textoContenedor: {
    maxWidth: "750px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  parrafo: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#8892b0",
    margin: 0,
  },
  gridHabilidades: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    maxWidth: "800px",
  },
  tarjetaHabilidad: {
    padding: "20px",
    background: "rgba(0, 255, 136, 0.02)",
    border: "1px solid rgba(0, 255, 136, 0.1)",
    borderRadius: "3px",
    transition: "all 0.3s ease",
  },
  subtitulo: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#00ff88",
    marginBottom: "12px",
    margin: 0,
    letterSpacing: "0.5px",
  },
  lista: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  itemLista: {
    fontSize: "13px",
    color: "#8892b0",
  },
  contenedorProyectos: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  tarjetaProyecto: {
    position: "relative" as const,
    padding: "30px",
    background: "rgba(0, 255, 136, 0.02)",
    border: "1px solid rgba(0, 255, 136, 0.1)",
    borderRadius: "3px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.3s ease",
    overflow: "hidden",
    display: "block",
  },
  contenidoProyecto: {
    position: "relative" as const,
    zIndex: 2,
  },
  numeroProyecto: {
    fontSize: "48px",
    fontWeight: "700",
    color: "rgba(0, 255, 136, 0.1)",
    margin: "0 0 10px 0",
    letterSpacing: "-2px",
  },
  escaneo: {
    position: "absolute" as const,
    top: "-100%",
    left: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.5), transparent)",
    boxShadow: "0 0 15px rgba(0, 255, 136, 0.5)",
    animation: "escaneo 3s linear infinite",
    zIndex: 1,
  },
  nombreProyecto: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "8px",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  descripcionProyecto: {
    fontSize: "14px",
    color: "#8892b0",
    marginBottom: "12px",
    lineHeight: "1.6",
    margin: 0,
  },
  tags: {
    display: "flex",
    gap: "8px",
    marginBottom: "12px",
    flexWrap: "wrap" as const,
  },
  tag: {
    fontSize: "11px",
    padding: "4px 10px",
    background: "rgba(0, 255, 136, 0.05)",
    border: "1px solid rgba(0, 255, 136, 0.15)",
    color: "#00cc6a",
    borderRadius: "2px",
    fontWeight: "500",
    letterSpacing: "0.3px",
  },
  enlaceProyecto: {
    color: "#00ff88",
    fontWeight: "600",
    fontSize: "13px",
    transition: "all 0.3s ease",
    display: "inline-block",
    textDecoration: "none",
  },
  textoContacto: {
    fontSize: "15px",
    color: "#8892b0",
    lineHeight: "1.8",
    maxWidth: "600px",
    marginBottom: "30px",
  },
  botonesContacto: {
    display: "flex",
    gap: "12px",
  },
  botonContacto: {
    padding: "12px 24px",
    background: "rgba(0, 255, 136, 0.05)",
    border: "1px solid rgba(0, 255, 136, 0.2)",
    color: "#00ff88",
    borderRadius: "3px",
    fontWeight: "600",
    fontSize: "13px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
    letterSpacing: "0.5px",
    display: "inline-block",
  },
}
