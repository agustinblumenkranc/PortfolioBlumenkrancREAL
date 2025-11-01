import type React from "react"
import type { Metadata } from "next"
import "./estilos-globales.css"

export const metadata: Metadata = {
  title: "Agustín Blumenkranc - Desarrollador Frontend",
  description: "Desarrollador frontend especializado en React y Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
