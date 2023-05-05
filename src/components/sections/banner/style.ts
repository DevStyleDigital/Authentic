import styled from 'styled-components';

export const BannerStyle = styled.div`
  width: 100%;
  height: 95vh;
  padding-top: 100px;
  background-color: black;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .banner_mobile {
    display: none;
  }
  .formulario {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    top: 0;
    left: 0;
    z-index: 7;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 100px;
    padding-right: 8rem;
    .container {
      border-radius: 10px;
      width: 30%;
      height: auto;
      min-height: 40%;
      background: rgba(0,0,0,.7);
      padding: 2rem;
      @media (max-width: 1600px) {
        width: 35%;
      }
      @media (max-width: 1300px) {
        width: 40%;
      }
    }
  }

  @media (max-width: 768px) {
    height: 90vh;
    .formulario{
      display: none;
    }
    .banner_mobile {
      display: block;
    }
    .banner {
      display: none;
    }
  }
  @media (max-width: 900px) {
    padding-top: 75px;
  }
  
`;
