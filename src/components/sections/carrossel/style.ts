import styled from 'styled-components';

export const CarrosselStyle = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      width: 50%;
      height: 100%;
      position: relative;
      .swiper-button-next,
      .swiper-button-prev {
        z-index: 7;
      }
      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-weight: 700;
        @media (max-width: 768px) {
          font-size: 30px;
        }
      }
      .swiper-button-prev,
      .swiper-rtl .swiper-button-next {
        left: var(--swiper-carrossel-navigation-sides-offset, 10px);
      }
      .swiper-button-next,
      .swiper-rtl .swiper-button-prev {
        right: var(--swiper-carrossel-navigation-sides-offset, 10px);
      }
      @media (max-width: 1440px) {
        width: 60%;
      }
      @media (max-width: 1024px) {
        width: 70%;
      }
      @media (max-width: 768px) {
        width: 80%;
      }
      .mySwiper {
        width: 100%;
        height: 100%;
        position: initial;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          .swiper-slide {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            img {
              width: 100%;
              height: 80%;
              object-fit: cover;
            }
            h1 {
              position: absolute;
              color: black;
              z-index: 9999;
              bottom: 1.5rem;
              @media (max-width: 768px) {
                bottom: .5rem;
                font-size: 1.2rem;
              }
              @media (max-width: 600px) {
                bottom: .5rem;
                font-size: .8rem;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 35vh;
  }
`;
