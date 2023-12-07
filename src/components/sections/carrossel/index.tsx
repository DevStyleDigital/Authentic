import { CarrosselStyle } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';

const Carrossel = () => {
  return (
    <CarrosselStyle id="galeria">
      <div className="content">
        <div className="container">
          <Swiper navigation={true}  pagination={true} modules={[Pagination, Navigation]} className="mySwiper">
          <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Rooftop.webp"
                width={1920}
                height={720}
              />
              <h1>RoofTop</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Rooftop2.webp"
                width={1920}
                height={720}
              />
              <h1>RoofTop</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/GYM.webp"
                width={1920}
                height={720}
              />
              <h1>Gym</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Pilates.webp"
                width={1920}
                height={720}
              />
              <h1>Pilates</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Piscina.webp"
                width={1920}
                height={720}
              />
              <h1>Piscinas e saunas</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Sauna.webp"
                width={1920}
                height={720}
              />
              <h1>Sauna</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Massagem.webp"
                width={1920}
                height={720}
              />
              <h1>Massagem</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Lounge-gourmet.webp"
                width={1920}
                height={720}
              />
              <h1>Lounge Gourmet</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/bangalo.webp"
                width={1920}
                height={720}
              />
              <h1>Bangalô</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/bar-da-piscina.webp"
                width={1920}
                height={720}
              />
              <h1>Bar da Piscina</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/brinquedoteca.webp"
                width={1920}
                height={720}
              />
              <h1>Espaço Kids</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/churrasqueira.webp"
                width={1920}
                height={720}
              />
              <h1>Churrasqueira</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/coworking.webp"
                width={1920}
                height={720}
              />
              <h1>Coworking</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Espaco-beauty.webp"
                width={1920}
                height={720}
              />
              <h1>Espaço Beauty</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Espaco-tiktok.webp"
                width={1920}
                height={720}
              />
              <h1>Espaço Tik Tok</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Fire-place.webp"
                width={1920}
                height={720}
              />
              <h1>Fire Place</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Mini-mercado.webp"
                width={1920}
                height={720}
              />
              <h1>Mini Mercado</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Pet-garden.webp"
                width={1920}
                height={720}
              />
              <h1>Pet Garden</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Play-room.webp"
                width={1920}
                height={720}
              />
              <h1>Pay Room</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Quadra-poliesportiva.webp"
                width={1920}
                height={720}
              />
              <h1>Quadra Polisesportiva</h1>
            </SwiperSlide>
 
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/Salao-de-gestas.webp"
                width={1920}
                height={720}
              />
              <h1>Salão de Festas</h1>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="banner-carrosel"
                src="/carrosel/SPA.webp"
                width={1920}
                height={720}
              />
               <h1>SPA</h1>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </CarrosselStyle>
  );
};

export default Carrossel;
