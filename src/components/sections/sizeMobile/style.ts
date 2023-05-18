import styled from "styled-components";

export const SizeMobileStyle = styled.section`
    width: 100%;
    height: 60vh;
    background: #1d1d1d;
    display: none;
    h1{
        color: white;
    }
    @media (max-width: 768px){
        display: flex;
        height: 50vh;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 600px){
       padding: 1rem 2rem;
       height: 35vh;
    }
`;