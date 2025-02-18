import Image from "next/image"

export default function PersonalBrand() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          No soy una startup. Soy tu proveedor técnico directo.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Markel Ramiro"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-xl mb-6">
              Hola, soy <strong>Markel Ramiro</strong>. Desarrollador especializado en IA para documentos (ex-AWS, +5
              años en RPA). Gestiono personalmente cada integración para garantizar resultados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm">Python Certified</span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm">
                Procesamiento de Lenguaje Natural (UAM)
              </span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm">GitHub: 1k+ Stars</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

