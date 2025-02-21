import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CreditCard, Home, FileCheck, Briefcase, Car, Book, Heart, Building, Plane } from "lucide-react";

const documentTypes = [
  {
    title: "Facturas de Servicios",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    examples: ["Luz", "Agua", "Gas", "Internet", "Teléfono"],
    fields: [
      { name: "Número de Factura", example: "F2024-1234" },
      { name: "Fecha de Emisión", example: "01/05/2024" },
      { name: "Consumo", example: "320 KW/h" },
      { name: "Importe Total", example: "145,20€" },
      { name: "Periodo Facturado", example: "Abril 2024" }
    ]
  },
  {
    title: "Documentos Bancarios",
    icon: <CreditCard className="w-6 h-6 text-green-600" />,
    examples: ["Extractos", "Recibos", "Transferencias"],
    fields: [
      { name: "Entidad Bancaria", example: "BBVA" },
      { name: "Fecha Operación", example: "15/04/2024" },
      { name: "Concepto", example: "Transferencia recibida" },
      { name: "Importe", example: "1.500,00€" },
      { name: "Saldo", example: "3.240,50€" }
    ]
  },
  {
    title: "Contratos Inmobiliarios",
    icon: <Home className="w-6 h-6 text-purple-600" />,
    examples: ["Alquiler", "Compraventa", "Fianza"],
    fields: [
      { name: "Tipo de Contrato", example: "Alquiler" },
      { name: "Dirección", example: "C/ Mayor 24" },
      { name: "Importe Mensual", example: "950€" },
      { name: "Duración", example: "12 meses" },
      { name: "Fianza", example: "1.900€" }
    ]
  },
  {
    title: "Documentos Laborales",
    icon: <Briefcase className="w-6 h-6 text-red-600" />,
    examples: ["Nóminas", "Contratos", "Finiquitos"],
    fields: [
      { name: "Empleado", example: "Juan García" },
      { name: "Salario Base", example: "2.100€" },
      { name: "Complementos", example: "300€" },
      { name: "Deducciones", example: "-450€" },
      { name: "Total Neto", example: "1.950€" }
    ]
  },
  {
    title: "Seguros",
    icon: <FileCheck className="w-6 h-6 text-yellow-600" />,
    examples: ["Hogar", "Vida", "Vehículo"],
    fields: [
      { name: "Nº Póliza", example: "POL-2024-5678" },
      { name: "Aseguradora", example: "Mapfre" },
      { name: "Cobertura", example: "Todo Riesgo" },
      { name: "Prima Anual", example: "380€" },
      { name: "Vencimiento", example: "31/12/2024" }
    ]
  },
  {
    title: "Documentos Vehículos",
    icon: <Car className="w-6 h-6 text-indigo-600" />,
    examples: ["ITV", "Permisos", "Multas"],
    fields: [
      { name: "Matrícula", example: "1234 ABC" },
      { name: "Fecha ITV", example: "10/03/2024" },
      { name: "Kilometraje", example: "45.000 km" },
      { name: "Resultado", example: "Favorable" },
      { name: "Próxima ITV", example: "10/03/2026" }
    ]
  },
  {
    title: "Documentos Académicos",
    icon: <Book className="w-6 h-6 text-orange-600" />,
    examples: ["Títulos", "Certificados", "Notas"],
    fields: [
      { name: "Titulación", example: "Grado en ADE" },
      { name: "Centro", example: "Universidad de Madrid" },
      { name: "Fecha", example: "20/06/2024" },
      { name: "Calificación", example: "Notable" },
      { name: "Nº Registro", example: "2024/1234" }
    ]
  },
  {
    title: "Documentos Médicos",
    icon: <Heart className="w-6 h-6 text-pink-600" />,
    examples: ["Informes", "Recetas", "Analíticas"],
    fields: [
      { name: "Paciente", example: "María López" },
      { name: "Fecha", example: "05/04/2024" },
      { name: "Diagnóstico", example: "Revisión anual" },
      { name: "Médico", example: "Dr. Martínez" },
      { name: "Centro Médico", example: "Hospital Central" }
    ]
  },
  {
    title: "Documentos Fiscales",
    icon: <Building className="w-6 h-6 text-emerald-600" />,
    examples: ["IRPF", "IVA", "Sociedades"],
    fields: [
      { name: "Ejercicio Fiscal", example: "2024" },
      { name: "Base Imponible", example: "45.000€" },
      { name: "Tipo Impositivo", example: "21%" },
      { name: "Cuota", example: "9.450€" },
      { name: "Resultado", example: "A devolver: 750€" }
    ]
  }
];

export default function DocumentTypesShowcase() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tipos de Documentos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Nuestro sistema puede procesar y extraer información de una amplia variedad de documentos empresariales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentTypes.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  {doc.icon}
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doc.examples.map((example, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {doc.fields.map((field, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{field.name}</span>
                      <span className="text-gray-900 font-medium">{field.example}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center mt-12 text-gray-600">
          ¿Necesitas procesar otro tipo de documento? Contáctanos para discutir tus necesidades específicas.
        </p>
      </div>
    </section>
  );
}