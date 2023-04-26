import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    background: linear-gradient(360deg, #F49A56 -13.21%, #6E311E 256.6%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    position: fixed;
    z-index: 999;
    ul {
        display: flex;
        gap: 2.2rem;
        justify-content: space-between;
        li {
            list-style: none;
            a{
                text-decoration: none;
                color: black;
                font-size: .8rem;
                font-weight: bolder;
                text-transform:uppercase;
            }
        }
    }
    
`;