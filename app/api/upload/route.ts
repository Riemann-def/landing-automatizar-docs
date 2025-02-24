// app/api/upload/route.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

// Puedes configurar un límite de tamaño para el body en next.config.js
// o gestionarlo de otra forma según tus necesidades.

export async function POST(request: Request) {
  try {
    // Parsear el body de la petición
    const { file, userEmail, documentType } = await request.json();

    // Validaciones básicas
    if (!file || !userEmail || !documentType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // (Opcional) Validación del formato del correo en el servidor
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return NextResponse.json({ error: "Correo electrónico inválido" }, { status: 400 });
    }

    // Convertir base64 a Buffer
    const buffer = Buffer.from(file.data, "base64");

    // Generar un nombre único para el archivo
    const fileName = `landing-uploads/${userEmail}/${documentType}/${uuidv4()}/${file.name}`;

    // Crear el cliente de S3
    const s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    // Parámetros para S3
    const params = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      Metadata: {
        userEmail: userEmail,
        documentType: documentType,
      },
    };

    // Subir a S3
    await s3Client.send(new PutObjectCommand(params));

    return NextResponse.json({
      success: true,
      message: "Archivo subido correctamente",
      key: fileName,
    }, { status: 200 });

  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "Error subiendo el archivo" }, { status: 500 });
  }
}
