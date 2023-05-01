import styled from 'styled-components';

export const BannerStyle = styled.div`
  width: 100%;
  height: 85vh;
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
  .button {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30%;
    background-color: transparent;
    padding-left: 6.5rem;
    a {
      padding: 1rem 4rem;
      border: 1px solid white;
      text-decoration: none;
      color: white;
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
    }
    @media (max-width: 1700px) {
      padding-left: 5rem;
    }
    @media (max-width: 1024px) {
      padding-left: 3.5rem;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    height: 75vh;
    .banner_mobile {
      display: block;
    }
    .banner {
      display: none;
    }
  }
`;
