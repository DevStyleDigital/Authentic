import styled from 'styled-components';

export const LocalizacaoStyle = styled.section`
  width: 100%;
  height: 80vh;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1024px) {
    height: 80vh;
  }
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 600px) {
    height: 35vh;
  }
`;
