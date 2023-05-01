import { CarrosselStyle } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Textura from '../../../assets/img/texture.png'
import Image from "next/image"

const Carrossel = () => {
    return (
        <CarrosselStyle id="galeria">
            <Image src={Textura} width={1440} height={711} alt="textura" />
            <div className="content">
                <div className="container">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <Image
                                alt="banner-carrosel"
                                src="/carrosel/1.png"
                                width={1600}
                                height={640}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                alt="banner-carrosel"
                                src="/carrosel/1.png"
                                width={1600}
                                height={640}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </CarrosselStyle>
    )
}

export default Carrossel