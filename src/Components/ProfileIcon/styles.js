import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: column;
`;

export const PersonDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* margin-left: 60%; */
  /* background-color: red; */
  >span{
    cursor: pointer;
    :hover{
      color: lightgrey;
      text-decoration: underline;
    }
  }
`; 