import styled from "styled-components";
import {Theme} from '../../utils/Styles/Theme';

export const Container = styled.div`
    max-width: 100%;
    height: 100%;
    top: 0;
    /* background-color: ${Theme.colors.$sispocOrange}; */
    background-color: #CBF4F4;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
`;

export const logoDiv = styled.div`
    width: 10%;
    height: 100%;
    background: no-repeat center;
    background-size: 5rem 5rem;
    bottom: 0;
    margin-left: 2rem;
`;

export const section1 = styled.div`
    width: 50%;
`