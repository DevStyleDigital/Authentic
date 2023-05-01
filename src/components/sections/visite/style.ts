import styled from 'styled-components';

export const VisiteStyle = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  min-height: 40vh;
  background-color: #1d1d1d;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .form {
      width: 50%;
    }
    .endereco {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.2rem;
      width: 40%;
      h1 {
        letter-spacing: 1px;
        color: white;
        font-size: 1.3rem;
        text-transform: uppercase;
        font-size: 28px;
      }
      span {
        color: rgba(255, 255, 255, 0.9);
        font-size: 18px;
        letter-spacing: 1px;
        display: flex;
        gap: 0.5rem;
        align-items: end;
      }
      @media (max-width: 1440px) {
        h1 {
          font-size: 1rem;
          display: flex;
          align-items: end;
          gap: 0.4rem;
        }
        span {
          font-size: 15px;
          display: flex;
          align-items: end;
          gap: 0.4rem;
        }
        .endereco_svg {
          width: 25px;
        }
        .whatsapp {
          width: 25px;
        }
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      gap: 2rem;
      .form {
        width: 80%;
      }
      .endereco {
        width: 80%;
        align-items: center;
      }
    }
  }
`;
