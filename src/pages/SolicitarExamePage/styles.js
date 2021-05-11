import styled from "styled-components";
import { Theme } from "../../utils/Styles/Theme";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select"

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    .content{
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
        .camposPreenchimento{
            width: 90%;
            height: 90%;
            display: flex;
            margin: 2rem 0 0 2rem;
            flex-direction: column;
        }
        .DetalhesdoExame{
            width: 80%;  
            height: 40%;
            //margin-top: 1rem;
            //background-color: red;
        }
        .TipoExame{
            width: 50%;
            height: 20%;
            //background-color: black;
        }
        .BotaoSolicitarExame{
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            //background-color: black;
        }
    }
`;

export const Titulo = styled.div`
    width: 100%;
    height: 15%;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
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
    display: flex;
    justify-content: center;
    height: 20%;
    width: 8%;
    margin-top: 2rem;
`;

export const DetalhesdoExame = styled(TextField)`
    width: 50%;
`;

export const InputTipodeExame = styled(Select)`
    height: 4rem;
    //width: 60%; 
    //background-color:red;
    .MuiSelect-root{
        
    }
    .MuiSelect-outlined {
        border-radius: 8px;
        padding-left: 1rem;
        margin-top: 1rem;
        //background-color: green; 
    }


`;

export const AdicionarProntuarioBotao = styled.button`
    width: 16.5rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
    background-color: #16E01E;
    color: white;
    border: none;
    transition: all 0.3s ease 0s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #ff7800;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
    >h1{
        font-weight: 500;
        width: 80%;
    }
`


