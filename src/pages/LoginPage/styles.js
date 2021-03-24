import styled from "styled-components"

export const Container = styled.div`
    height: 85%;
    width: 95%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
`;

export const FirstSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    background-color: #fff;
`;

export const SecondSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    background: #77E8EA;
`;

export const LoginTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 0 2.2rem;
    width: 100%;
    height: 15%;
    >h1{
        color:#77E8EA;
        font-size: 1.2rem;
        line-height: 49.03px; 
    }
`;

export const LoginImageCard = styled.div`
    width: 100%;
    height: 71%;
    background-size: contain;
    background-position: center;
`;

export const ImageCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 80%;
`;

export const LoginDescription = styled.div`
    width: 100%;
    height:30%;
    /*background: lightblue;*/
`;

export const DescriptionTitle = styled.div`
    margin: 0 0 0 2rem;
    >h1{
        color:#77E8EA;
        font-size: 2rem;
        line-height: 40px; 
    }
    
`;

export const DescriptionText = styled.div`
    
    margin: 1rem 0 0 2rem;
    >p{
        color:gray;
        font-size: 1rem;
        line-height: 40px; 
    }
`;