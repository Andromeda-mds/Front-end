import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const PersonDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  >span{
    text-align: center;
    cursor: pointer;
    :hover{
      color: lightgrey;
      text-decoration: underline;
    }
  }
`; 