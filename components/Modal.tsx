import { useState, useEffect } from "react"
import { X, Mail, AlertCircle, CheckCircle, UploadCloud } from "lucide-react"


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
  const [file, setFile] = useState<File | null>(null)
  const [userEmail, setUserEmail] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    if (selectedType) {
      setFile(null)
      setUserEmail("")
      setShowConfirmation(false)
    }
  }, [selectedType])

  const handleFileUpload = (file: File) => {
    setFile(file)
  }
  
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64Data = (reader.result as string).split(",")[1]
        resolve(base64Data)
      }
      reader.onerror = () => {
        reject(new Error("Error al leer el archivo"))
      }
    })
  }
  
  const handleSubmit = async () => {
    if (!userEmail || !file || !selectedType) return
  
    // Validación del formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(userEmail)) {
      alert("Correo electrónico inválido")
      return
    }
  
    try {
      setIsUploading(true)
      const base64Data = await readFileAsBase64(file)
  
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: {
            name: file.name,
            type: file.type,
            data: base64Data,
          },
          userEmail,
          documentType: selectedType,
        }),
      })
  
      if (!response.ok) throw new Error("Error en la subida")
  
      setShowConfirmation(true)
    } catch (error) {
      console.error("Upload error:", error)
      alert("Error al subir el archivo")
    } finally {
      setIsUploading(false) // Finaliza la carga
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) handleFileUpload(files[0])
  }

  const handleClose = () => {
    setSelectedType(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={handleClose}>
      <div 
        className="bg-white rounded-t-xl sm:rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6 md:p-8">
          {/* Cabecera del modal */}
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
                    className="text-left p-4 sm:p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gradient-to-r hover:from-primary/40 hover:to-secondary/40 hover:shadow-sm transition-all"
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
          ) : showConfirmation ? (
            // Confirmación de envío
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">¡Documento enviado!</h3>
              <p className="text-gray-600 mb-4">
                Los resultados se enviarán a <span className="font-semibold">{userEmail}</span>
              </p>
              <button
                onClick={() => {
                  setShowConfirmation(false)
                  setSelectedType(null)
                }}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/80"
              >
                Cerrar
              </button>
            </div>
          ) : (
            // Vista de dos columnas
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Columna izquierda - Subida de archivo */}
              <div>
                <h3 className="font-semibold mb-4">Opción 1: Subir archivo</h3>
                {isUploading ? (
                  <div className="flex justify-center items-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : !file ? (
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center ${
                      isDragging ? "border-primary bg-primary/10" : "border-gray-300"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Arrastra tu archivo aquí o</p>
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/80"
                    >
                      Seleccionar archivo
                    </label>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">
                        Archivo seleccionado: <span className="font-normal">{file.name}</span>
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-lg"
                        placeholder="ejemplo@email.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Necesitamos tu correo para enviarte los resultados
                      </p>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/80"
                    >
                      Enviar documento
                    </button>
                  </div>
                )}
              </div>
  
              {/* Columna derecha - Envío por correo */}
              <div>
                <h3 className="font-semibold mb-4">Opción 2: Enviar por correo</h3>
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Envía tus documentos a:</h4>
                      <p className="font-mono bg-white p-2 rounded border break-all">
                        {documentTypes.find(d => d.type === selectedType)?.email}
                      </p>
                      <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Máximo 4 documentos por correo
                        </p>
                        <p className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Dispones de 20 documentos en total
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
  
          {/* Información adicional y campos extraídos */}
          {selectedType && (
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h4 className="font-medium mb-2">Campos que se extraerán:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {documentTypes
                  .find(d => d.type === selectedType)
                  ?.fields.map((field, i) => (
                    <div key={i} className="text-sm bg-gray-50 p-2 rounded">
                      {field}
                    </div>
                  ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Recibirás los resultados de la extracción en tu correo. No almacenamos los datos y el proceso tarda entre 1s y 1m.
              </p>
            </div>
          )}
          {/* Botón inferior */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={selectedType ? () => setSelectedType(null) : handleClose}
              className="w-full sm:w-auto px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              {selectedType ? "Elegir otro tipo" : "Cancelar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}