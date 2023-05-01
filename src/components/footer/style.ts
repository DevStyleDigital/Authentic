import styled from 'styled-components';

export const FooterStyle = styled.section`
  width: 100%;
  height: auto;
  min-height: 20vh;
  background-image: url(/texture-footer.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  gap: 1rem;
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
`;
