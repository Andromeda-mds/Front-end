import React from "react";
import * as home from "./styles"
import decode from "jwt-decode";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const ProfileIcon = () =>{
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
            <home.PersonDiv>
                <span>
                    <p>{clientName}</p>
                </span>
                <PersonOutlineIcon fontSize="large" style={{ color: "gray" }} />
                <span onClick={handleLogout}>
                    <p>Sair</p>
                </span>
            </home.PersonDiv>
        </home.Container>
    );


}
export default ProfileIcon