import { Mail, Database, FileText } from "lucide-react"

const steps = [
  {
    icon: <Mail className="w-8 h-8 text-secondary" />,
    title: "Envío",
    description: "Adjunta tus documentos a un correo electrónico y envíalos para su procesamiento",
  },
  {
    icon: <Database className="w-8 h-8 text-gray-600" />,
    title: "Procesamiento",
    description: "Nuestro sistema de IA extrae los datos clave con precisión y rapidez",
  },
  {
    icon: <FileText className="w-8 h-8 text-green-500" />,
    title: "Resultados",
    description: "Recibe un archivo estructurado con los datos extraídos en formato Excel o JSON",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proceso simplificado y eficiente</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-gray-100 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

