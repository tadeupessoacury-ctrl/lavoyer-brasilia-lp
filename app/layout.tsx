import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lavoyer.com.br"),
  title: "Lavoyer Calistenia | Academia de Calistenia em Brasília - Noroeste",
  description:
    "Lavoyer Calistenia: metodologia própria de calistenia, graduação por níveis e treinadores capacitados para cada aluno. Agende sua semana experimental no Noroeste, Brasília - DF.",
  keywords: [
    "calistenia Brasília",
    "academia de calistenia",
    "Lavoyer Calistenia",
    "calistenia Noroeste",
    "treinadores de calistenia Brasília",
    "musculação Noroeste",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Lavoyer Calistenia | Brasília - Noroeste",
    description:
      "Metodologia própria, graduação por níveis e treinadores capacitados. Agende sua semana experimental.",
    images: ["/images/hero-capa.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
