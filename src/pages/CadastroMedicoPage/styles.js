import styled from "styled-components";

export const Container = styled.div`
    height: 120vh;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`;

export const Barra = styled.div`
    width: 100%;
    height: 315%;
    background: #55CBCD;
    border: 1px solid #55CBCD;
    box-sizing: border-box;
    >h1{
        font-size: 2rem;
        line-height: 40px;
    }

`;

export const formDiv = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;

`; 

export const Titulo = styled.div`
    width: 100%;
    height: 15%;
    padding: 2rem;
    >h1{
        font-size: 2rem;
        line-height: 40px;
    }
`;

