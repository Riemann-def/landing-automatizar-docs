import Image from "next/image"

const technologies = [
  { name: "Python", logo: "/python-logo.svg" },
  { name: "OpenAI", logo: "/openai-logo.svg" },
  { name: "AWS", logo: "/aws-logo.svg" },
  { name: "FastAPI", logo: "/fastapi-logo.svg" },
]

export default function Technology() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          No es magia, es <span className="text-secondary">ingeniería robusta</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="w-24 h-24 relative mb-4 transition-transform hover:scale-110">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-center font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg">
          He optimizado modelos de IA para documentos en español, garantizando precisión y velocidad.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Ver casos técnicos →
          </a>
        </p>
      </div>
    </section>
  )
}

