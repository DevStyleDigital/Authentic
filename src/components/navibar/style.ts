import styled from 'styled-components';

export const Container = styled.div`
  /* visibility: hidden; */
  position: absolute;
  right: -500px;
  top: 0;
  height: 100vh;
  width: 200px;
  background: #1D1D1D;
  display: grid;
  justify-content: center;
  transition: all .5s;
  .aberto{
    right: 0;
  }
  ul{
    width: 100%;
    list-style: none;
    padding: 4rem 0;
    display: block;
    li{
      font-weight: 700;
      font-size: 17px;
      line-height: 21px;
      padding: .7rem 0;
      a{
        text-decoration: none;
        color: #ffff;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const Fade = styled.div`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, opacity 0.5s;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: rgba(0,0,0, 0.7);
    z-index: -1;
`