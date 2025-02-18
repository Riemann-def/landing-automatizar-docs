import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Texto + CTA */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-text">Menos papeleo,</span>
              <br />
              más productividad con IA
            </h1>

            <p className="text-xl mb-6 text-gray-600">
              Envía facturas, contratos o nóminas a nuestro sistema y recibe
              <span className="font-semibold text-gray-900"> datos estructurados listos para usar</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all">
                Probar Gratis - 20 Documentos
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                Ver Ejemplo Completo →
              </Button>
            </div>

            <p className="mt-4 text-sm text-gray-500">Sin tarjeta • Sin compromiso • Procesamiento 100% confidencial</p>
          </div>

          {/* Visual: Documento vs Extracción */}
          <div className="md:w-1/2">
            <div className="relative group">
              {/* Before/After interactivo */}
              <div className="grid grid-cols-2 gap-8 p-8 bg-gray-50 rounded-xl border border-gray-200">
                {/* Documento Original */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm group-hover:blur-0 transition-all" />
                  <div className="relative bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                    <img src="/factura-example.png" alt="Factura original" className="rounded-md" />
                    <div className="mt-3 text-xs text-gray-500">Documento enviado</div>
                  </div>
                </div>

                {/* Extracción IA */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg blur-sm group-hover:blur-0 transition-all" />
                  <div className="relative bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                    <div className="font-mono text-sm">
                      <span className="text-secondary">{"{"}</span>
                      <div className="ml-4">
                        <p>
                          <span className="text-primary">"fecha"</span>: "2024-05-01",
                        </p>
                        <p>
                          <span className="text-primary">"total"</span>: 145.20,
                        </p>
                        <p>
                          <span className="text-primary">"iva"</span>: 21%
                        </p>
                      </div>
                      <span className="text-secondary">{"}"}</span>
                    </div>
                    <div className="mt-3 text-xs text-gray-500">Datos estructurados</div>
                  </div>
                </div>
              </div>

              {/* Flecha de proceso */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-pulse bg-gradient-to-r from-primary to-secondary p-2 rounded-full shadow-lg">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

