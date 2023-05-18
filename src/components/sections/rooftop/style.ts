import styled from "styled-components";

export const RoofTopStyle = styled.section`
    width: 100%;
    height: 55vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .image {
            width: 30%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
            @media (max-width: 768px) {
                width: 50%;
            }
        }

        .text{
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: .3rem;
            
            h1{
                font-size: 2rem;
                font-weight: 900;
                @media (max-width: 600px) {
                    font-size:1.5rem;
                }
            }
            p{
                font-size: 3.5rem;
                font-weight: lighter;
                @media (max-width: 768px) {
                    text-align: center;
                }
                @media (max-width: 600px) {
                    font-size:2.5rem;
                }
            }
            h4 {
                font-size: 1.5rem;
                line-height: 28px;
                font-weight: 300;
                letter-spacing: 1px;
                color: rgba(0,0,0, .7);
                @media (max-width: 768px) {
                    text-align: center;
                }
                @media (max-width: 600px) {
                    font-size:1rem;
                    line-height: 20px;
                }
            }
            span{
                margin-top: 1rem;
                font-size: 1rem;
                line-height: 20px;
                font-weight: 400;
                color: rgba(0,0,0, .7);
                @media (max-width: 768px) {
                    text-align: center;
                }
                @media (max-width: 600px) {
                    font-size: .8rem;
                }
            }
            @media (max-width: 768px) {
                width: 50%;
                align-items: center;
            }
            @media (max-width: 600px) {
                width: 90%;
            }
        }
        @media (max-width: 768px) {
            flex-direction: column-reverse;
        }
        
    }
    @media (max-width: 768px) {
        height: fit-content;
        padding-top: 1rem ;
    }
`;