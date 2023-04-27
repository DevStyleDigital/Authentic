import Banner from "@components/sections/banner";
import ContentVideo from "@components/sections/contentVideo";
import Header from "@components/header";
import Empreendimento from "@components/sections/empreendimento";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ContentVideo />
      <Empreendimento/>
    </>
  );
};

export default Home;
