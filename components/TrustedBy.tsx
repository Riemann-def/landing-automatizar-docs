import Image from "next/image"

const clients = [
  {
    name: "Asesoría López & Díaz",
    logo: "/lopez-diaz.png",
    description: "Gestión fiscal y contable",
  },
  {
    name: "Clínica Unamuno",
    logo: "/unamuno-clinica.png",
    description: "Centro médico especializado",
  },
  {
    name: "Inmobiliaria Acasuso",
    logo: "/acasuso-inmobiliaria.png",
    description: "Servicios inmobiliarios",
  },
]

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-600 text-sm font-medium mb-8">
          Confían en mi solución para automatizar su gestión documental
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="relative w-[180px] h-[60px] opacity-70 hover:opacity-100 transition-opacity">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
        Herramienta que se adapta a cualquier volumen de gestión.
        </p>
      </div>
    </section>
  )
}