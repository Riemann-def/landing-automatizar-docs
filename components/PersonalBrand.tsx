import Image from "next/image"

export default function PersonalBrand() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          No soy una startup. Soy tu proveedor técnico directo.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <Image
              src="/perfil-markel.jpg"
              alt="Markel Ramiro"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12 text-center md:text-left">
            <p className="text-xl mb-6">
              Hola, soy <strong>Markel Ramiro</strong>. Desarrollo soluciones de IA para la automatización de documentos, 
              enfocadas en extracción de datos y optimización de procesos.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm">IA aplicada a documentos</span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm">Automatización con NLP</span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm">Infraestructura escalable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
