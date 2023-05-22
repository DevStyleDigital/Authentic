import styled from 'styled-components';

export const FormStyle = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  gap: 1.5rem;
  h1 {
    font-size: 1.4rem;
    letter-spacing: 2px;
    @media (max-width: 768px) {
      font-size: 0.9rem;
      white-space: nowrap;
    }
  }
  input {
    padding: 1rem 1.5rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    width: 100%;
    ::placeholder {
      color: white;
      font-size: 0.9rem;
      letter-spacing: 1px;
      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
    }
    @media (max-width: 768px) {
      padding: 0.7rem 1.2rem;
      width: 90%;
    }
  }

  span{
    font-size: .7rem;
    color: rgba(255,255,255, .6);
    /* margin-top: -1rerm; */
    @media (min-width: 768px) {
      font-size: .7rem;
    }
  }
  button {
    width: fit-content;
    padding: 1rem 1.5rem;
    background: linear-gradient(238.7deg, #f39a55 34.28%, #6e311e 101.29%);
    font-weight: bolder;
    font-size: 1rem;
    transition: all 0.5s;
    :hover {
      transform: scale(1.1) translateX(5px);
    }
    @media (max-width: 768px) {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
  }
`;
