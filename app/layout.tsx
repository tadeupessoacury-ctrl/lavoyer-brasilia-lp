import type { Metadata, Viewport } from "next";
import { Saira, Raleway } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon-white-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/favicon-white-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/favicon-white-180.png",
  },
  openGraph: {
    title: "Lavoyer Calistenia | Brasília - Noroeste",
    description:
      "Metodologia própria, graduação por níveis e treinadores capacitados. Agende sua semana experimental.",
    images: ["/images/hero-capa-v2.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${saira.variable} ${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
