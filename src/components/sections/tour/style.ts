import styled from "styled-components";

export const TourStyle = styled.section`
    width: 100%;
    height: 90vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        width: 60%;
        height: 90%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        h1{
            font-size: 1.8rem;
            letter-spacing: 1px;
            @media (max-width: 768px) {
                font-size: 1.8rem;
                text-align: center;
            }
        }
        .tour{
            width: 100%;
            height: 100%;
            background-color: black;
        }
        a{
            width: fit-content;
            padding: 1rem 1.5rem;
            background: linear-gradient(238.7deg, #F39A55 34.28%, #6E311E 101.29%);
            font-weight: bolder;
            font-size: .8rem;
            transition: all .5s;
            letter-spacing: 1px;
            color: black;
            text-decoration: none;
            text-transform: uppercase;
            :hover{
                transform: scale(1.1);
            }
        }
        @media (max-width: 768px) {
            width: 90%;
        }
    }
    @media (max-width: 768px) {
        height: 70vh;
    }
`