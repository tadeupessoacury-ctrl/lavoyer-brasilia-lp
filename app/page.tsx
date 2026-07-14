import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProvaSocial from "@/components/ProvaSocial";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Metodologia from "@/components/Metodologia";
import Movimentos from "@/components/Movimentos";
import Acompanhamento from "@/components/Acompanhamento";
import Comunidade from "@/components/Comunidade";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProvaSocial />
        <Servicos />
        <Diferenciais />
        <Metodologia />
        <Movimentos />
        <Acompanhamento />
        <Comunidade />
        <Localizacao />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
