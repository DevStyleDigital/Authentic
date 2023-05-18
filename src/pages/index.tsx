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
import SizeMobile from '@components/sections/sizeMobile';
import RoofTop from '@components/sections/rooftop';
import Grid from '@components/sections/grid';

const Home = () => {
  const { setWhatsapp } = useLayoutContext();
  return (
    <>
      <WhatsappButton />
      <div onClick={() => setWhatsapp(false)}>
        <Header />
        <Banner />
        <SizeMobile />
        <ContentVideo />
        <Empreendimento />
        <Localizacao />
        <Plantas />
        <Diferenciais />
        <RoofTop />
        <Carrossel />
        <Grid />
        <Tour />
        <About />
        <Visite />
        <Footer />
      </div>
    </>
  );
};

export default Home;
