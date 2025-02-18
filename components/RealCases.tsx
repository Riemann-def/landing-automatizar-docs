import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cases = [
  {
    title: "Factura de Luz",
    input: "PDF de Endesa/Repsol",
    output: '{ "Fecha": "2024-05-01", "Total": 145.20, "KW consumidos": 320 }',
  },
  {
    title: "Contrato de Alquiler",
    input: "PDF escaneado",
    output: '{ "Fianza": 1200, "Duración": "12 meses", "Dirección": "Calle..." }',
  },
  {
    title: "Nómina",
    input: "Imagen de nómina",
    output: '{ "Bruto": 2100, "Neto": 1650, "IRPF": "15%" }',
  },
]

export default function RealCases() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ejemplos de lo que puedo extraer:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{case_.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  <strong>Input:</strong> {case_.input}
                </p>
                <p>
                  <strong>Output:</strong> <code>{case_.output}</code>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-lg">¿Necesitas otro formato? Escríbeme y lo adapto en 24h.</p>
      </div>
    </section>
  )
}

