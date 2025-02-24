import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Automatiza con Markel Ramiro",
  description: "Automatiza el procesamiento de documentos con IA avanzada. Envía facturas, nóminas y más, y recibe datos estructurados de manera rápida y segura.",
  icons: {
    icon: '/favicon.ico',
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'