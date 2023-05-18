import styled from "styled-components";

export const GridStyle = styled.section`
    width: 100%;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    .content{
        width: 85%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 50% 50%;
        gap: 2rem;
        .block {
            width:100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        @media (max-width: 1400px){
            width: 95%;
        }
        @media (max-width: 768px){
            grid-template-columns: auto auto;
            grid-template-rows: initial;
            gap: 1rem;
        }
    }
    @media(max-width: 600px){
        min-height: inherit;
    }

`