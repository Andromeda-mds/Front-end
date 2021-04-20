import React from "react";
import * as home from "./styles"
import Header from "../../Components/Header";
import decode from "jwt-decode";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";




const GuiaMedicoPage = () => {

    const [clientName, setClientName] = React.useState("");
 

    const handleDataClientByToken = async () => {
        setClientName(await decode(localStorage.getItem("loginToken")).nome);
    }

    React.useEffect(() => {
        handleDataClientByToken();
    },[]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };



    return (
        <home.Container>
            <home.HeaderDiv>
                <Header/>
            </home.HeaderDiv>
            <div className="content">
                <home.PersonDiv>
                    <p>{clientName}</p>
                    <PersonOutlineIcon fontSize="large" style={{ color: "gray" }} />
                    <span onClick={handleLogout}>
                    <p>Sair</p>
                    </span>
                </home.PersonDiv>

            </div>
        </home.Container>

    );
}

export default GuiaMedicoPage