import styled from 'styled-components';

export const EmpreendimentoStyle = styled.section`
  width: 100%;
  background: #1d1d1d;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 6rem 0;
  .content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    .banner {
      width: 100%;
      height: 55%;
      background: linear-gradient(269.26deg, #f39a55 12.4%, #6e311e 122.69%);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .apresent {
      display: flex;
      color: white;
      justify-content: space-between;
      .firstCol {
        display: flex;
        width: 50%;
        flex-direction: column;
        gap: 2rem;
        h1 {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 0;
          line-height: 2.5rem;
          letter-spacing: 1px;
        }
        h4 {
          font-size: 1.25rem;
          font-weight: normal;
          line-height: 2rem;
          width: 90%;
          font-style: normal;
          color: rgba(255, 255, 255, 0.9);
          span {
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
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
          @media (max-width: 768px) {
            display: none;
          }
        }
        @media (max-width: 1444px) {
          gap: 1rem;
          h1 {
            font-size: 1.5rem;
            line-height: 1.5rem;
          }
          h4 {
            font-size: 1rem;
            font-weight: normal;
            line-height: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }
      }
      .secondCol {
        width: 40%;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        span {
          font-size: 1.25rem;
          font-weight: normal;
          line-height: 1.5rem;
          width: 80%;
          font-style: normal;
          color: rgba(255, 255, 255, 0.9);
        }
        h1 {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 0;
          line-height: 2rem;
          letter-spacing: 1px;
        }
        img {
          width: 100%;
          height: max-content;
          @media (max-width: 768px) {
            width: 90%;
          }
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
          display: none;
          :hover {
            border: 1px solid black;
            background: linear-gradient(360deg, #f49a56 -13.21%, #6e311e 256.6%);
            color: black;
          }
          @media (max-width: 768px) {
            display: block;
          }
        }

        @media (max-width: 1444px) {
          gap: 1rem;
          span {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          h1 {
            font-size: 1.5rem;
            line-height: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          width: 100%;
          align-items: center;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 1rem;
      }
    }
    @media (max-width: 1444px) {
      width: 65%;
    }
    @media (max-width: 768px) {
      width: 100%;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 0 4rem 0;
  }
`;
