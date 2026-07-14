import type { Metadata, Viewport } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lavoyer.com.br"),
  title: "Lavoyer Calistenia | Academia de Calistenia em Brasília - Noroeste",
  description:
    "Lavoyer Calistenia: metodologia própria de calistenia, graduação por níveis e personal trainer exclusivo para cada aluno. Agende sua semana experimental no Noroeste, Brasília - DF.",
  keywords: [
    "calistenia Brasília",
    "academia de calistenia",
    "Lavoyer Calistenia",
    "calistenia Noroeste",
    "personal trainer Brasília",
    "musculação Noroeste",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Lavoyer Calistenia | Brasília - Noroeste",
    description:
      "Metodologia própria, graduação por níveis e personal trainer exclusivo. Agende sua semana experimental.",
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
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
