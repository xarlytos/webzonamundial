import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "ZonaMundial — Predicciones, Fantasy y Engagement para el Mundial 2026",
  description: "Plataforma de predicciones, fantasy y engagement en español para la Copa del Mundo 2026. 48 selecciones, 104 partidos, 39 días.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
