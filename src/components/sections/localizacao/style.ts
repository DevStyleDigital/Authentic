import styled from 'styled-components';

export const LocalizacaoStyle = styled.section`
  width: 100%;
  height: fit-content;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    height: 100%;
    width: 100%;
    padding: 0 20rem 6rem 20rem;
    @media (max-width: 1600px) {
      padding: 0rem 5rem 6rem 5rem;
    }
    @media (max-width: 768px) {
      padding:0;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 600px) {
    height: 35vh;
  }
`;
