import styled from 'styled-components';

export const CarrosselStyle = styled.section`
  width: 100%;
  height: 90vh;
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
      width: 100%;
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
        color: white !important;
      }
      .swiper-button-next,
      .swiper-rtl .swiper-button-prev {
        right: var(--swiper-carrossel-navigation-sides-offset, 10px);
        color: white !important;
      }
      .swiper-pagination{
        bottom: 1.5rem !important;
        z-index: 65;
      }
      .swiper-pagination  .swiper-pagination-bullet{
        background: rgba(0,0,0,.6);
        opacity: 1;
        width: 8px;
        height: 8px;
      
      }

      .swiper-pagination  .swiper-pagination-bullet-active{
        background-color: white;
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
              height: 100%;
              object-fit: cover;
            }
            h1 {
              position: absolute;
              filter: drop-shadow(0px 2px 4px #000000);
              left: 5rem;
              color: white;
              z-index: 9999;
              bottom: 5rem;
              font-size: 2rem;
              @media (max-width: 768px) {
                bottom: 3.5rem;
                left: 2rem;
                font-size: 1.5rem;
              }
              @media (max-width: 600px) {
                left: 1rem;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 40vh;
  }
`;
