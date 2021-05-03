import React from "react";
import * as home from "./styles";


const BotaoQuadrado = (props) => {

    var Image = props.image;

    return (
        <home.Container>
            <home.BotaoQuadrado>
                <Image style={{ fontSize: 80 }}/>
                <h1>{props.title}</h1>
            </home.BotaoQuadrado>
        </home.Container>
        
    );


}
export default BotaoQuadrado;