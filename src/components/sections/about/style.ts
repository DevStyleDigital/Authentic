import styled from 'styled-components';

export const AboutStyle = styled.section`
  width: 100%;
  height: auto;
  min-height: 35vh;
  background: #d9d9d9;
  position: relative;
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  .vector {
    position: absolute;
    bottom: -10px;
    right: -100px;
    opacity: 1;
    z-index: 1;
    @media (max-width: 1440px) {
      width: 400px;
      bottom: -35px;
      right: -70px;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      left: 50%;
      transform: translate(-50%, 50%);
      bottom: 42%;
    }
  }
  .texts {
    z-index: 99;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .velasco {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h4 {
        font-weight: 400;
        width: 70%;
      }
      @media (max-width: 1440px) {
        gap: 0.5rem;
        h4 {
          width: 95%;
          font-size: 15px;
        }
        svg {
          width: 150px;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
        align-items: center;
      }
    }
    .respeito {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        line-height: 35px;
        font-weight: bolder;
        letter-spacing: 1px;
        font-size: 35px;
        @media (max-width: 1440px) {
          font-size: 25px;
          line-height: 25px;
        }
      }
      h4 {
        width: 70%;
        font-weight: 600;
        letter-spacing: 1px;
        @media (max-width: 1440px) {
          width: 90%;
          font-size: 12px;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
        align-items: center;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }
  }
`;
