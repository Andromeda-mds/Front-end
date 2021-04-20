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

export const HeaderDiv = styled.div`
    height: 12%;
`;

export const PersonDiv = styled.div`
  width: 10%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 90%;
  /* background-color: red; */
  >span{
    cursor: pointer;
    :hover{
      color: lightgrey;
      text-decoration: underline;
    }
  }
`; 