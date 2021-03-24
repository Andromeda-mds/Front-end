import styled from "styled-components"


export const Container = styled.div`
    height: 60%;
    width: 100%;
`;

export const InputSection = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonSection = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginInput = styled.input`
    border: 0.05px solid gray;
    height: 3.4rem;
    width: 90%;
    background-color: transparent;
    &:focus {
        border-left: 4px solid orange;
        border-top: 1.2px solid gray;
        border-right: 1.2px solid gray;
        transform: translateY(-2px);
        transition: 0.3s;
        outline: none;
    }
`

export const LoginButton = styled.button`

  width: 15rem;
  height: 3rem;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: #77E8EA;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  
  &:hover{
    background-color: #FF7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;