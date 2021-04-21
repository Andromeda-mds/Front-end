import styled from "styled-components";
import TextField from "@material-ui/core/TextField";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .camposPreenchimento{
        width: 90%;
        height: 90%;
        display: flex;
        margin: 2rem 0 0 2rem;
        flex-direction: column;
        justify-content: space-between;
    }
`;


export const Anamnese = styled(TextField)`
    /* margin-top: 1rem; */
    width: 100%;
`;

export const Exames = styled(TextField)`
    /* margin-top: 1rem; */
    width: 100%;
;`

export const Diagnostico = styled(TextField)`
    width: 100%;
`;

export const Receita = styled(TextField)`
    width: 100%;
`;