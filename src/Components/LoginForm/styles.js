import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
  height: 60%;
  width: 100%;
  margin-top: 2.5rem;
`;

export const InputSection = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .inputProps {
      background-color: #fafafa;
      color: #ff7800;
      &::after {
        border-bottom-color: #ff7800;
      }
    }
    .inputLabelProps {
      color: gray;
    }
    .input-password {
      display: flex;
      position: relative;
      justify-content: center;
      z-index: 2;
      align-items: center;
      width: 100%;
      .icon {
        z-index: 1;
        position: absolute;
        color: gray;
        margin: 0 0 0 28rem;
      }
    }
  }
`;

export const ButtonSection = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled(TextField)`
  height: 3.4rem;
  width: 90%;
  padding-left: 1rem;
  margin-top: 1rem;
  color: gray;
`;

export const LoginButton = styled.button`
  width: 12.5rem;
  height: 2.5rem;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: #77e8ea;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #ff7800;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;
