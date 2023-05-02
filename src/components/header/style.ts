import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  background: linear-gradient(360deg, #f49a56 -13.21%, #6e311e 256.6%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  position: fixed;
  z-index: 999;
  .list {
    display: flex;
    gap: 2.2rem;
    justify-content: space-between;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }
    @media (max-width: 1024px) {
      gap: 1rem;
    }
  }
  .menu {
    display: none;
  }
  @media (max-width: 900px) {
    padding: 0 2rem;
    height: 75px;
    .list {
      display: none;
    }
    .menu {
      display: block;
    }
  }
  .menuLinks {
    position: absolute;
    /* bottom: -100px; */
    height: 400px;
    width: 300px;
    ul {
      display: flex;
      gap: 2.2rem;
      justify-content: space-between;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: black;
          font-size: 0.8rem;
          font-weight: bolder;
          text-transform: uppercase;
        }
      }
    }
  }
`;
