import styled from 'styled-components';

export const ContentVideoStyle = styled.section`
  width: 100%;
  height: 85vh;
  background: #1d1d1d;
  padding: 6rem 7rem;
  .content {
    width: 100%;
    height: fit-content;
    min-height: 100%;
    display: grid;
    background-color: #000000;
    grid-template-columns: 60% 40%;
    filter: drop-shadow(0px 0px 30px #000000);
    .video {
      width: 100%;
      height: 100%;
      background-color: gray;
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
    .form {
      padding: 3rem;
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    .content {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 380px) {
    height: 110vh;
  }
`;
