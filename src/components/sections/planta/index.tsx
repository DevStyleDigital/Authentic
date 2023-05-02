import { PlantasArray } from '@utils/plantas';
import { PlantasStyle } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { DiferenciasArray } from '@utils/diferenciais';

const Plantas = () => {
  return (
    <PlantasStyle id="plantas">
      <div className="carrosel">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {PlantasArray.map((planta) => {
            return (
              <SwiperSlide key={planta.id}>
                <div className="planta">
                  <div className="header">
                    <div className="title">
                      <h1>{planta.tamanho}</h1>
                      <span>M²</span>
                    </div>
                    <span className="tipo">{planta.tipo}</span>
                    <span className="suites">{planta.suites}</span>
                    <span className="descri">{planta.descricao}</span>
                  </div>
                  {planta.imagem}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="acabamento">
        <div className="header">
          <h1>Acabamento Incomparável</h1>
          <span>Entregue com os itens abaixo</span>
        </div>
        <div className="icons">
          <div className="content">
            {DiferenciasArray.map((item) => (
              <div className="icon" key={item.id}>
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlantasStyle>
  );
};

export default Plantas;
