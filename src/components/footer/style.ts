import styled from 'styled-components';

export const FooterStyle = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 20vh;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 3rem; 
    span {
      text-align: center;
      font-size: 13px;
    }
    svg {
      width: 200px;
    }
    .logo {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      a {
        color: black;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;
