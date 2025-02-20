import { useState } from "react"
import { X, Mail, AlertCircle } from "lucide-react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const documentTypes = [
  {
    type: "Factura",
    description: "Extrae información clave como fecha, total, IVA, y conceptos.",
    fields: [
      "Fecha de emisión",
      "Número de factura",
      "Proveedor/Cliente",
      "Base imponible",
      "IVA",
      "Total",
      "Forma de pago",
    ],
    email: "facturas@docs.markelramiro.com"
  },
  {
    type: "Nómina",
    description: "Obtén detalles sobre salarios, deducciones y datos del empleado.",
    fields: ["Periodo de nómina", "Salario base", "Complementos", "IRPF", "Seguridad Social", "Total neto", "Empresa"],
    email: "nominas@docs.markelramiro.com"
  },
  {
    type: "DNI",
    description: "Extrae información personal del Documento Nacional de Identidad.",
    fields: [
      "Nombre completo",
      "DNI/NIE",
      "Fecha de nacimiento",
      "Fecha de expedición",
      "Fecha de validez",
      "Nacionalidad",
    ],
    email: "dni@docs.markelramiro.com"
  },
]

export default function Modal({ isOpen, onClose }: ModalProps) {
    const [selectedType, setSelectedType] = useState<string | null>(null)

    const handleClose = () => {
      setSelectedType(null) // Restablecer el estado al cerrar
      onClose()
    }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedType ? `Procesar ${selectedType}` : "Procesar Documentos"}
            </h2>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
          </div>

          {!selectedType ? (
            <>
              <p className="text-gray-600 mb-6">Seleccione el tipo de documento que desea probar</p>
              <div className="grid gap-4 mb-6">
                {documentTypes.map((doc) => (
                  <button
                    key={doc.type}
                    onClick={() => setSelectedType(doc.type)}
                    className="text-left p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{doc.type}</h3>
                    <p className="text-gray-600">{doc.description}</p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Email Section - Principal Focus */}
              <div className="bg-gradient-to-r from-primary/40 to-secondary/40 rounded-xl mb-6 border border-gray-200 p-2 md:p-4">
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div className="overflow-hidden">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">Envía tus documentos a:</h3>
                    <p className="text-lg font-mono bg-white px-2 py-1 rounded-lg border border-gray-200 text-gray-800">
                    {documentTypes.find((d) => d.type === selectedType)?.email}
                    </p>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <p className="flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        Máximo 4 documentos por correo
                      </p>
                      <p className="flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        Dispones de 20 documentos en total
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Information */}
              <div className="space-y-4">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Campos que se extraerán:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {documentTypes
                      .find((d) => d.type === selectedType)
                      ?.fields.map((field, index) => (
                        <div key={index} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                          {field}
                        </div>
                      ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Proceso:</h4>
                  <p className="text-sm text-gray-600">
                    Recibirás un archivo Excel con todos los datos extraídos en un plazo máximo de 5 minutos. Los
                    documentos se procesarán de forma segura y confidencial.
                  </p>
                </div>
              </div>
            </>
          )}

          <div className="mt-8 text-right border-t border-gray-200 pt-6">
            <button
              onClick={selectedType ? () => setSelectedType(null) : handleClose}
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              {selectedType ? "Elegir otro tipo" : "Cancelar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
