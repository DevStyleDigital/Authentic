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
      height: 80%;
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
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
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
