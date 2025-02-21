"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

export default function Hero({ openModal }: { openModal: () => void }) {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          {/* Texto + CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-text">Menos papeleo,</span>
              <br />
              más productividad con IA
            </h1>

            <p className="text-xl mb-6 text-gray-600">
              Envía facturas, contratos o nóminas a nuestro sistema y recibe{" "}
              <span className="font-semibold text-gray-900">datos estructurados listos para usar</span>
            </p>

            <div className="flex flex-col lg:flex-row gap-4">
              <Button 
                onClick={openModal}
                className="bg-primary text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all"
              >
                Probar Gratis - 20 Documentos
              </Button>
              {/* <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                Ver Ejemplo Completo →
              </Button> */}
            </div>

            <p className="mt-4 text-sm text-gray-500">Sin tarjeta • Sin compromiso • Procesamiento 100% confidencial</p>
          </div>

          {/* Visual: Documento vs Extracción */}
          <div className="w-full xl:w-1/2">
            <div className="relative group">
              {/* Contenedor flex para alineación vertical */}
              <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                
                {/* Documento Original */}
                <div className="flex flex-col items-center w-full md:w-1/2 max-w-xs">
                  <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full">
                    <img src="/factura-example.png" alt="Factura original" className="rounded-md w-full" />
                    <div className="mt-2 text-xs text-gray-500 text-center">Documento enviado</div>
                  </div>
                </div>

                {/* Flecha de proceso */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full shadow-lg">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Flecha en Mobile */}
                <div className="flex md:hidden items-center justify-center mt-2 mb-2">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full shadow-lg">
                    <ArrowDown className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Extracción IA */}
                <div className="flex flex-col items-center w-full md:w-1/2 max-w-xs">
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full">
                    <pre className="font-mono text-sm text-left leading-tight whitespace-pre-wrap">
                    <span>{"{"}</span>
                      <div className="ml-4">
                        <p className="text-secondary"><span>invoice_number</span>: <span className="text-gray-800">1234567</span>,</p>
                        <p className="text-secondary"><span>date</span>: <span className="text-gray-800">11.02.2030</span>,</p>
                        <p className="text-secondary"><span>customer</span>: <span className="text-gray-800">{"{"}</span></p>
                        <div className="ml-2">
                          <p className="text-secondary"><span>name</span>: <span className="text-gray-800">Richard Sanchez</span>,</p>
                          <p className="text-secondary"><span>address</span>: <span className="text-gray-800">123 Anywhere St., Any City</span>,</p>
                        </div>
                        <p className="text-secondary"><span className="text-gray-800">{"}"}</span>,</p>
                        <p className="text-secondary"><span>items</span>: <span className="text-gray-800">[</span></p>
                        <div className="ml-2">
                          <p className="text-secondary"><span className="text-gray-800">{"{"}</span></p>
                          <div className="ml-2">
                            <p className="text-secondary"><span>description</span>: <span className="text-gray-800">DISEÑO LOGO</span>,</p>
                            <p className="text-secondary"><span>quantity</span>: <span className="text-gray-800">1</span>,</p>
                            <p className="text-secondary"><span>price</span>: <span className="text-gray-800">100</span></p>
                          </div>
                          <p className="text-secondary"><span className="text-gray-800">{"}"}</span>,</p>
                          <p className="text-secondary"><span className="text-gray-800">{"{"}</span></p>
                          <div className="ml-2">
                            <p className="text-secondary"><span>description</span>: <span className="text-gray-800">DISEÑO WEB</span>,</p>
                            <p className="text-secondary"><span>quantity</span>: <span className="text-gray-800">1</span>,</p>
                            <p className="text-secondary"><span>price</span>: <span className="text-gray-800">100</span></p>
                          </div>
                          <p className="text-secondary"><span className="text-gray-800">{"}"}</span></p>
                        </div>
                        <p className="text-secondary"><span className="text-gray-800">]</span>,</p>
                        <p className="text-secondary"><span>total_amount</span>: <span className="text-gray-800">220</span>,</p>
                      </div>
                      <span>{"}"}</span>
                    </pre>
                    <div className="mt-2 text-xs text-gray-500 text-center">Datos estructurados</div>
                  </div>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
