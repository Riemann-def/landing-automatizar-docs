import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import RealCases from "@/components/RealCases"
import Technology from "@/components/Technology"
import PersonalBrand from "@/components/PersonalBrand"
import FinalCTA from "@/components/FinalCTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <RealCases />
      <Technology />
      <PersonalBrand />
      <FinalCTA />
    </main>
  )
}

