import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calistenia from "@/components/Calistenia";
import Manifesto from "@/components/Manifesto";
import Niveis from "@/components/Niveis";
import Acompanhamento from "@/components/Acompanhamento";
import Movimentos from "@/components/Movimentos";
import Diferenciais from "@/components/Diferenciais";
import Galeria from "@/components/Galeria";
import Comunidade from "@/components/Comunidade";
import ProvaSocial from "@/components/ProvaSocial";
import Inauguracao from "@/components/Inauguracao";
import Localizacao from "@/components/Localizacao";
import FAQ from "@/components/FAQ";
import Kids from "@/components/Kids";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calistenia />
        <Manifesto />
        <Galeria />
        <Niveis />
        <Acompanhamento />
        <Movimentos />
        <Diferenciais />
        <Comunidade />
        <ProvaSocial />
        <Inauguracao />
        <Localizacao />
        <FAQ />
        <Kids />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
