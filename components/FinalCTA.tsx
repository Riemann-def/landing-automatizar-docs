import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para dejar de perder horas?</h2>
        <p className="text-xl mb-8">Envía tus primeros documentos GRATIS. Sin registro, sin tarjeta.</p>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            Simplemente envía un email a <span className="font-semibold text-primary">procesar@markelramiro.com</span>{" "}
            con tus documentos adjuntos.
          </p>
          <Button className="bg-primary text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all">
            Comenzar ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="mt-8 text-lg">
          ¿Prefieres una demo personalizada?{" "}
          <a href="#" className="text-secondary hover:underline font-semibold">
            Agendar llamada de 10 min
          </a>
        </p>
      </div>
    </section>
  )
}

