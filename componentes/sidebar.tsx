"use client"

import { useEffect, useState } from "react"

export default function Sidebar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState("")
  const [particles, setParticles] = useState<Array<{ id: string; x: number; y: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (Math.random() > 0.85) {
        const id = Math.random().toString(36).substr(2, 9)
        const newParticle = { id, x: e.clientX, y: e.clientY }
        setParticles((prev) => [...prev.slice(-10), newParticle])

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id))
        }, 1500)
      }
    }

    const handleScroll = () => {
      const sections = ["#acerca", "#experiencia", "#proyectos", "#contacto"]
      const scrollPos = window.scrollY + 200

      for (const id of sections) {
        const element = document.querySelector(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setIsActive(id)
            break
          }
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { label: "ACERCA", href: "#acerca" },
    { label: "EXPERIENCIA", href: "#experiencia" },
    { label: "PROYECTOS", href: "#proyectos" },
    { label: "CONTACTO", href: "#contacto" },
  ]

  return (
    <aside style={styles.sidebar}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "fixed",
            left: particle.x,
            top: particle.y,
            width: "4px",
            height: "4px",
            background: "#00ff88",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "particle-float 1.5s ease-out forwards",
            boxShadow: "0 0 8px rgba(0, 255, 136, 0.8)",
            zIndex: 1,
          }}
        />
      ))}

      <div style={styles.contenidoSidebar}>
        <div style={styles.header}>
          <h1 style={styles.nombre}>Agustín Blumenkranc</h1>
          <p style={styles.titulo}>Desarrollador Frontend</p>
          <p style={styles.descripcion}>Especializado en React & Next.js</p>
        </div>

        <nav style={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                ...styles.enlace,
                ...(isActive === item.href ? styles.enlaceActivo : {}),
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.textShadow = "0 0 10px rgba(0, 255, 136, 0.8)"
                target.style.transform = "translateX(4px)"
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.textShadow = "none"
                target.style.transform = "translateX(0)"
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div style={styles.footer}>
          {[
            { href: "https://github.com/agustinblumenkranc", label: "GitHub" },
            { href: "https://www.linkedin.com/in/agustín-blumenkranc-7b06a526a/", label: "LinkedIn" },
            { href: "mailto:agustinblume@gmail.com", label: "Email" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              style={styles.icon}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.borderColor = "rgba(0, 255, 136, 0.8)"
                target.style.boxShadow = "0 0 15px rgba(0, 255, 136, 0.5), inset 0 0 10px rgba(0, 255, 136, 0.1)"
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement
                target.style.borderColor = "rgba(0, 255, 136, 0.2)"
                target.style.boxShadow = "none"
              }}
            >
              {link.label === "GitHub" && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              )}
              {link.label === "LinkedIn" && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              )}
              {link.label === "Email" && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"></path>
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      <svg
        style={{
          ...styles.cursor,
          left: mousePos.x - 50,
          top: mousePos.y - 50,
        }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="#00ff88" strokeWidth="0.5" opacity="0.15" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#00ff88" strokeWidth="0.5" opacity="0.2" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.3" />
        <circle cx="50" cy="50" r="5" fill="none" stroke="#00ff88" strokeWidth="1.5" opacity="0.6" />
      </svg>
    </aside>
  )
}

const styles = {
  sidebar: {
    width: "300px",
    height: "100vh",
    position: "fixed" as const,
    top: 0,
    left: 0,
    padding: "50px 40px",
    borderRight: "1px solid rgba(0, 255, 136, 0.1)",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    overflowY: "auto" as const,
  },
  contenidoSidebar: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "50px",
  },
  header: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  nombre: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
    margin: 0,
    letterSpacing: "-0.5px",
    animation: "glow-pulse 3s ease-in-out infinite",
  },
  titulo: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#00ff88",
    margin: 0,
    letterSpacing: "0.5px",
    textTransform: "uppercase" as const,
    animation: "pulse 2s ease-in-out infinite",
  },
  descripcion: {
    fontSize: "12px",
    fontWeight: "400",
    color: "#00cc6a",
    margin: 0,
    letterSpacing: "0.3px",
  },
  nav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  enlace: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#00cc6a",
    textDecoration: "none",
    letterSpacing: "0.8px",
    textTransform: "uppercase" as const,
    borderLeft: "2px solid transparent",
    paddingLeft: "12px",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  enlaceActivo: {
    color: "#00ff88",
    borderLeft: "2px solid #00ff88",
    textShadow: "0 0 10px rgba(0, 255, 136, 0.6)",
  },
  footer: {
    display: "flex",
    gap: "12px",
  },
  icon: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(0, 255, 136, 0.2)",
    borderRadius: "3px",
    color: "#00cc6a",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  cursor: {
    position: "fixed" as const,
    width: "100px",
    height: "100px",
    pointerEvents: "none" as const,
    transition: "all 0.1s ease-out",
    opacity: 0.5,
    zIndex: 0,
    filter: "drop-shadow(0 0 10px rgba(0, 255, 136, 0.4))",
  },
}
