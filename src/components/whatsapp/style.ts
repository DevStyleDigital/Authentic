import styled from "styled-components";

export const ArrowStyle = styled.button`    
    width: 50px;
    height: 50px;
    background: linear-gradient(238.7deg, #F39A55 34.28%, #6E311E 101.29%);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 300px;
    right: 0;
    z-index: 9;
    @media (min-width: 768px) {
        display: none;
    }
`

export const WhatsappStyle = styled.div`
    width: 110px;
    height: 130px;
    background: linear-gradient(238.7deg, #F39A55 34.28%, #6E311E 101.29%);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 300px;
    z-index: 9;
    right: -500px;
    padding: 1rem .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all .5s;
    span{
        text-transform: uppercase;
        color: white;
        font-size: 11px;
        text-align: center;
        font-weight: bold;
        line-height: 15px;
    }
    svg{
        transform: scale(1.2);
    }
    @media (min-width: 768px) {
        right: 0px !important;
    }
`