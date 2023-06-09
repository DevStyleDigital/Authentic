import styled from 'styled-components';

export const DiferenciaisStyle = styled.section`
  width: 100%;
  height: auto;
  min-height: 60vh;
  display: flex;
  .firstCol {
    width: auto;
    min-width: 30%;
    height: auto;
    position: relative;
    .content {
      /* position: absolute;
      top: 0;
      left: 0; */
      position: relative;
      z-index: 9;
      width: 100%;
      height: 100%;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 4;
      display: flex;
      flex-direction: column;
      padding: 5rem;
      gap: 1rem;
      span {
        color: rgba(255, 255, 255, 0.9);
        line-height: 28px;
        font-size: 22px;
        @media (max-width: 1440px) {
          font-size: 20px;
        }
      }
      h1 {
        color: white;
        font-style: normal;
        font-size: 1.7rem;
        letter-spacing: 1px;
        line-height: 2rem;
        span {
          font-size: 3rem;
          line-height: 2.3rem;
          @media (max-width: 1440px) {
            font-size: 2.5rem;
          }
          @media (max-width: 768px) {
            font-size: 3rem;
          }
        }
        @media (max-width: 1440px) {
          font-size: 1.2rem;
        }
        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
      }

      .line {
        width: 35%;
        height: 2px;
        background-color: white;
      }
      a {
        width: max-content;
        padding: 1rem;
        display: flex;
        align-items: center;
        border: 1px solid white;
        text-decoration: none;
        color: white;
        white-space: nowrap;
        font-size: 1rem;
        font-weight: bolder;
        text-transform: uppercase;
        background: transparent;
        letter-spacing: 2px;
        transition: all 0.3s ease-in-out;
        :hover {
          border: 1px solid black;
          background: linear-gradient(360deg, #f49a56 -13.21%, #6e311e 256.6%);
          color: black;
        }
        @media (max-width: 1440px) {
          font-size: 0.7rem;
        }
      }
      @media (max-width: 1000px) {
        text-align: center;
        align-items: center;
        padding: 2rem;
        height: auto;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    @media (max-width: 1200px) {
      min-width: 40%;
    }
    @media (max-width: 1000px) {
      min-width: 100%;
      height: fit-content;
    }
  }
  .secondCol {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    background: linear-gradient(269.26deg, #f39a55 12.4%, #6e311e 122.69%);
    .diferenciais1 {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3rem;
      span {
        color: white;
        font-size: 22px;
        @media (max-width: 1440px) {
          font-size: 1rem;
        }
      }
      @media (max-width: 1000px) {
        gap: 0.5rem;
      }
    }
    .diferenciais2 {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3rem;
      span {
        color: white;
        font-size: 22px;
        @media (max-width: 1440px) {
          font-size: 1rem;
        }
      }
      @media (max-width: 1000px) {
        gap: 0.5rem;
      }
    }
    @media (max-width: 1000px) {
      padding: 2rem 1rem 2rem 3rem;
      gap: 1.5rem;
    }
  }
  @media (max-width: 1700px) {
    min-height: 70vh;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    min-height: 60vh;
    height: auto;
  }
`;
