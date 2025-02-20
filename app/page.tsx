// page.tsx
"use client"

import { useState } from "react"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import RealCases from "@/components/RealCases"
import Technology from "@/components/Technology"
import PersonalBrand from "@/components/PersonalBrand"
import FinalCTA from "@/components/FinalCTA"
import Modal from "@/components/Modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Hero openModal={() => setIsModalOpen(true)} />
      <HowItWorks />
      <RealCases />
      <Technology />
      <PersonalBrand />
      <FinalCTA openModal={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}