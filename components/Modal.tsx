import { useState } from "react"
import { X, Mail, AlertCircle } from "lucide-react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const documentTypes = [
  {
    type: "Factura",
    description: "Extrae información detallada de facturas incluyendo datos del cliente y artículos.",
    fields: [
      "Número de factura",
      "Fecha de emisión",
      "Datos del cliente (nombre, dirección, email)",
      "Artículos (descripción, cantidad, precio)",
      "Importe total",
      "Estado del pago (pagado, pendiente, vencido)"
    ],
    email: "facturas@docs.markelramiro.com"
  },
  {
    type: "Nómina",
    description: "Extrae información completa sobre salarios, deducciones y datos del empleado.",
    fields: [
      "Datos del empleado (nombre, ID, puesto)",
      "Periodo de pago",
      "Fecha de pago",
      "Salario bruto",
      "Deducciones detalladas",
      "Salario neto"
    ],
    email: "nominas@docs.markelramiro.com"
  },
  {
    type: "DNI",
    description: "Extrae la información personal del Documento Nacional de Identidad.",
    fields: [
      "Nombre",
      "Apellidos",
      "Fecha de nacimiento",
      "Número de DNI (con letra)",
      "Fecha de validez"
    ],
    email: "dni@docs.markelramiro.com"
  },
]

export default function Modal({ isOpen, onClose }: ModalProps) {
    const [selectedType, setSelectedType] = useState<string | null>(null)

    const handleClose = () => {
      setSelectedType(null)
      onClose()
    }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={handleClose}>
      <div 
        className="bg-white rounded-t-xl sm:rounded-xl shadow-xl w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {selectedType ? `Procesar ${selectedType}` : "Procesar Documentos"}
            </h2>
            <button 
              onClick={handleClose} 
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {!selectedType ? (
            <>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Seleccione el tipo de documento que desea procesar
              </p>
              <div className="grid gap-3 sm:gap-4 mb-4 sm:mb-6">
                {documentTypes.map((doc) => (
                  <button
                    key={doc.type}
                    onClick={() => setSelectedType(doc.type)}
                    className="text-left p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                      {doc.type}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {doc.description}
                    </p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="bg-gradient-to-r from-primary/40 to-secondary/40 rounded-lg sm:rounded-xl mb-4 sm:mb-6 border border-gray-200 p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 hidden sm:block" />
                  <div className="w-full">
                    <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">
                      Envía tus documentos a:
                    </h3>
                    <p className="text-sm sm:text-base font-mono bg-white px-2 py-1.5 rounded-lg border border-gray-200 text-gray-800 break-all">
                      {documentTypes.find((d) => d.type === selectedType)?.email}
                    </p>
                    <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-600">
                      <p className="flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        Máximo 4 documentos por correo
                      </p>
                      <p className="flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        Dispones de 20 documentos en total
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Campos que se extraerán:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {documentTypes
                      .find((d) => d.type === selectedType)
                      ?.fields.map((field, index) => (
                        <div 
                          key={index} 
                          className="text-xs sm:text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg"
                        >
                          {field}
                        </div>
                      ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Proceso:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Recibirás los datos extraídos en un formato estructurado en un plazo máximo de 5 minutos. Los
                    documentos se procesarán de forma segura y confidencial.
                  </p>
                </div>
              </div>
            </>
          )}

          <div className="mt-6 sm:mt-8 text-right border-t border-gray-200 pt-4 sm:pt-6">
            <button
              onClick={selectedType ? () => setSelectedType(null) : handleClose}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm sm:text-base"
            >
              {selectedType ? "Elegir otro tipo" : "Cancelar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}