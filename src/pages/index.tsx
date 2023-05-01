import Banner from '@components/sections/banner';
import ContentVideo from '@components/sections/contentVideo';
import Header from '@components/header';
import Empreendimento from '@components/sections/empreendimento';
import Localizacao from '@components/sections/localizacao';
import Plantas from '@components/sections/planta';
import Diferenciais from '@components/sections/diferenciais';
import Carrossel from '@components/sections/carrossel';
import Tour from '@components/sections/tour';
import About from '@components/sections/about';
import Visite from '@components/sections/visite';
import Footer from '@components/footer';
import WhatsappButton from '@components/whatsapp';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';

const Home = () => {
  const { setWhatsapp } = useLayoutContext();
  return (
    <>
      <WhatsappButton />
      <div onClick={() => setWhatsapp(false)}>
        <Header />
        <Banner />
        <ContentVideo />
        <Empreendimento />
        <Localizacao />
        <Plantas />
        <Diferenciais />
        <Carrossel />
        <Tour />
        <About />
        <Visite />
        <Footer />
      </div>
    </>
  );
};

export default Home;
