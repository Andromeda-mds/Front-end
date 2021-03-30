import styled from "styled-components";

export const Container = styled.div`
    height: 110vh;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
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

export const Titulo = styled.div`
    width: 100%;
    height: 15%;
    padding: 2rem;
    >h1{
        font-size: 2rem;
        line-height: 40px;
    }
`;

