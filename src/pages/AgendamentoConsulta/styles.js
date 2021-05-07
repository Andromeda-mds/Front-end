import styled from "styled-components";

export const Container = styled.div`
    height: 120vh;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    .content{
        height:89%;
        width:100%;
        
    }
`;

export const formDiv = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    //background-color: green;
`; 

export const Titulo = styled.div`
    width: 100%;
    height: 15%;
    padding: 2rem;
    display: flex;
    >h1{
        height: 100%;
        width: 40%;
        font-size: 2rem;
        line-height: 40px;
    }
`;

export const HeaderDiv = styled.div`
  height: 11%;
`;



export const ProfileWrapper = styled.div`
    height: 100%;
    width: 10%;
    margin-left: 65%;
`;