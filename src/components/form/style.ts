import styled from "styled-components";

export const FormStyle = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    gap: 1.5rem;
    h1{
        font-size: 1.4rem;
        letter-spacing: 2px;
        @media (max-width: 768px){
            font-size: .9rem;
            white-space: nowrap;
        }
    }
    input{
        padding: 1rem 1.5rem;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        width: 80%;
        ::placeholder{
            color: white;
            font-size: .9rem;
            letter-spacing: 1px;
            @media (max-width: 768px){
                font-size: .7rem;
            }
        }
        @media (max-width: 768px){
            padding: .7rem 1.2rem;
            width: 90%;
        }
    }
    button{
        width: fit-content;
        padding: 1rem 1.5rem;
        background: linear-gradient(238.7deg, #F39A55 34.28%, #6E311E 101.29%);
        font-weight: bolder;
        font-size: 1rem;
        transition: all .5s;
        :hover{
            transform: scale(1.1) translateX(5px);
        }
        @media (max-width: 768px){
            padding: .6rem 1rem;
            font-size: .9rem;
        }
    }
`