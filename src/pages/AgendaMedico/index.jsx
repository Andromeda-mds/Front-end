import React from "react";
import * as S from "./styles";
import Header from "../../Components/Header";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";
import decode from "jwt-decode";
import axios from "axios";
import { backendURL } from "../../services/api"

const AgendaMedico = () => {
  const [token, setToken] = React.useState(localStorage.getItem("loginToken"));
  const [role, setRole] = React.useState(localStorage.getItem("role"));
  //const [userId, setUserId] = React.useState("");
  const [agendaMedico, setAgendaMedico] = React.useState([]);
  var userId;

  const handleClientId = async () => {
    userId = await decode(localStorage.getItem("loginToken"));
  }

  const fetchMedicoData = () => {
    axios.get(`${backendURL}agenda/medico/${userId._id}`, 
            {headers: {"x-access-token": `${token}`}}
            ).then(res => {
              console.log(res);
              setAgendaMedico(res.item.horariosDisponiveis);
              console.log("Agenda: ", agendaMedico);
            }).catch(err => {
              console.log(err);
            })
  }

  React.useEffect(async () => {
    await handleClientId();
    console.log(userId);
    fetchMedicoData();
  },[]);

  return (
    <S.Wrapper>
      <S.HeaderDiv>
        <Header />
      </S.HeaderDiv>
      <S.Content>
        <S.AgendaDiv>
          <ScheduleComponent readonly={role === "medico" ? true : false}>
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                DragAndDrop,
                Resize,
              ]}
            />
          </ScheduleComponent>
        </S.AgendaDiv>
      </S.Content>
    </S.Wrapper>
  );
};

export default AgendaMedico;
