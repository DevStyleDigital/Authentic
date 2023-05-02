import styled from 'styled-components';

export const PlantasStyle = styled.section`
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .carrosel {
    width: 90%;
    height: auto;
    padding: 2rem 0;
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
      left: var(--swiper-plantas-navigation-sides-offset, 10px);
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: var(--swiper-plantas-navigation-sides-offset, 10px);
    }
    .planta {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      .header {
        display: flex;
        flex-direction: column;
        .tipo {
          width: fit-content;
          padding: 0.5rem 1rem;
          background: linear-gradient(252.13deg, #f39a55 7.94%, #6e311e 117.29%);
          color: white;
          font-size: 2rem;
          font-weight: 700;
          @media (max-width: 1500px) {
            font-size: 1.5rem;
          }
          @media (max-width: 1000px) {
            font-size: 2rem;
          }
          @media (max-width: 600px) {
            font-size: 1.5rem;
          }
          @media (max-width: 500px) {
            font-size: 1rem;
          }
        }
        .suites {
          margin-top: 1.5rem;
          font-size: 1.7rem;
          font-weight: 600;
          @media (max-width: 1500px) {
            font-size: 1.2rem;
          }
          @media (max-width: 1000px) {
            font-size: 1.5rem;
          }
          @media (max-width: 600px) {
            font-size: 1.8rem;
          }
          @media (max-width: 500px) {
            font-size: 1.4rem;
          }
        }
        .descri {
          margin-top: 0.4rem;
          font-size: 1rem;
          line-height: 1.2rem;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.8);
          width: 70%;
          @media (max-width: 1500px) {
            font-size: 0.8rem;
            line-height: 1rem;
          }
          @media (max-width: 1000px) {
            font-size: 1rem;
            line-height: 1.2rem;
          }
          @media (max-width: 500px) {
            font-size: 0.8rem;
          }
        }
        .title {
          display: flex;
          align-items: start;
          gap: 1rem;
          h1 {
            font-size: 7rem;
            @media (max-width: 1500px) {
              font-size: 5rem;
            }
            @media (max-width: 1000px) {
              font-size: 6rem;
            }
            @media (max-width: 600px) {
              font-size: 4rem;
            }
            @media (max-width: 500px) {
              font-size: 5rem;
            }
          }
          span {
            font-size: 3rem;
            font-weight: 700;
            @media (max-width: 1500px) {
              font-size: 2rem;
            }
            @media (max-width: 1000px) {
              font-size: 3rem;
            }
            @media (max-width: 600px) {
              font-size: 2rem;
            }
          }
          @media (max-width: 600px) {
            gap: 0.5rem;
          }
        }
      }
      img {
        width: 50%;
        height: 100%;
        @media (max-width: 1500px) {
          width: 50%;
        }
        @media (max-width: 1000px) {
          width: 70%;
        }
        @media (max-width: 600px) {
          width: 90%;
        }
        @media (max-width: 500px) {
          width: 95%;
        }
      }
      @media (max-width: 1000px) {
        flex-direction: column;
        .header {
          align-items: center;
        }
        .descri {
          text-align: center;
        }
      }
    }
    @media (max-width: 600px) {
      padding: 1.5rem 0;
    }
  }
  .acabamento {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.5rem;
      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 2px;
        @media (max-width: 1500px) {
          font-size: 2rem;
        }
        @media (max-width: 600px) {
          font-size: 1.2rem;
        }
      }
      span {
        font-size: 1.2rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.8);
        @media (max-width: 1500px) {
          font-size: 1rem;
        }
        @media (max-width: 600px) {
          font-size: 0.8rem;
        }
      }
    }
    .icons {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      padding: 2rem 0 4rem 0;
      .content {
        width: 55%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 20px;
        .icon {
          padding: 0.5rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
          @media (max-width: 1500px) {
            font-size: 1rem;
          }
          @media (max-width: 600px) {
            font-size: 0.8rem;
          }
        }
        @media (max-width: 1500px) {
          grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        }
        @media (max-width: 1200px) {
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        }
      }
      @media (max-width: 600px) {
        padding: 1rem 0 3rem 0;
      }
    }
  }
`;
