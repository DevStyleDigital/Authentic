import styled from "styled-components";

export const ContentVideoStyle = styled.section`
    width: 100%;
    height: 85vh;
    background: #1D1D1D;
    padding: 6rem 7rem; 
    .content{
        width: 100%;
        height: 100%;
        display: grid;
        background-color: #000000;
        grid-template-columns: 60% 40%;
        filter: drop-shadow(0px 0px 30px #000000);
        .video{
            width: 100%;
            height: 100%;
            background-color: gray;
        }
    }
`