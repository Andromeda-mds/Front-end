import styled from "styled-components";

export const Container = styled.div`
    height: 110vh;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    .content{
        height:89%;
        width:100%;
        
    }
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
    padding: 0.5rem;
    //background-color:red;
    display: flex;
    >h1{
        font-size: 2rem;
        line-height: 40px;
        margin-left: 2rem;
        margin-top: 1rem;
    }
`;

export const HeaderDiv = styled.div`
    height: 12%;
`;
 

export const ProfileWrapper = styled.div`
    height: 100%;
    width: 10%;
    margin-left: 63%;
`;
