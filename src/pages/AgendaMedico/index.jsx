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
import { backendURL } from "../../services/api";

const AgendaMedico = () => {
  const [token, setToken] = React.useState(localStorage.getItem("loginToken"));
  const [role, setRole] = React.useState(localStorage.getItem("role"));
  const [medicoWorkDays, setMedicoWorkDays] = React.useState([]);
  const [medicoWorkHours, setMedicoWorkHours] = React.useState([]);
  var userId;
  var MworkDays = [];
  var agendaMedico;

  const handleClientId = async () => {
    userId = await decode(localStorage.getItem("loginToken"));
  };

  const handleMedicoWorkDays = () => {
    agendaMedico.map((i) => {
      let day = i.dia;
      switch (day) {
        case "1":
          MworkDays.push(1);
          break;
        case "2":
          MworkDays.push(2);
          break;
        case "3":
          MworkDays.push(3);
          break;
        case "4":
          MworkDays.push(4);
          break;
        case "5":
          MworkDays.push(5);
          break;
        case "6":
          MworkDays.push(6);
          break;
        case "7":
          MworkDays.push(7);
          break;
      }
    });
    MworkDays.sort();
    setMedicoWorkDays(MworkDays);
  };

  const handleMedicoWorkHours = () => {
    let MworkHours
    agendaMedico.map((i) => {
      if(i.periodo == "manha"){
        MworkHours = "matutino"
      }
      else if (i.periodo == "tarde"){
        MworkHours = "vespertino"
      }
      else
        MworkHours = "integral"
    });
    setMedicoWorkHours(MworkHours);
    console.log(MworkHours);
  };

  const fetchMedicoData = () => {
    axios
      .get(`${backendURL}agenda/medico/${userId._id}`, {
        headers: { "x-access-token": `${token}` },
      })
      .then((res) => {
        console.log(res);
        agendaMedico = res.data.item.horariosDisponiveis;
        handleMedicoWorkDays();
        handleMedicoWorkHours();
        console.log("Agenda: ", agendaMedico);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(async () => {
    await handleClientId();
    console.log(userId);
    fetchMedicoData();
    
  }, []);

  return (
    <S.Wrapper>
      <S.HeaderDiv>
        <Header />
      </S.HeaderDiv>
      <S.Content>
        <S.AgendaDiv>
          <ScheduleComponent
            readonly={role === "medico" ? true : false}
            workDays={medicoWorkDays}
            workHours={{ highlight: true, start: "10:00", end: "14:00" }}
            availableTime={{startTime: "08:00", endTime: "10:00", color: "#efb6b6"}}
          >
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
