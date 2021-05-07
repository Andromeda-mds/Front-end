/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import React from "react";
import * as S from "./styles";
import Header from "../../Components/Header";
import decode from "jwt-decode";
import axios from "axios";
import { backendURL } from "../../services/api";

import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  WeekView,
  Toolbar,
  DateNavigator,
  TodayButton,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";

const AgendaMedico = () => {
  const [token, setToken] = React.useState(localStorage.getItem("loginToken"));
  const [role, setRole] = React.useState(localStorage.getItem("role"));
  const [medicoWorkDays, setMedicoWorkDays] = React.useState([]);
  const [medicoWorkHours, setMedicoWorkHours] = React.useState([]);
  var userId;
  var MworkDays = [];
  var agendaMedico;
  var consultas;

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
    let MworkHours;
    agendaMedico.map((i) => {
      if (i.periodo === "manha") {
        MworkHours = "matutino";
      } else if (i.periodo === "tarde") {
        MworkHours = "vespertino";
      } else MworkHours = "integral";
    });
    setMedicoWorkHours(MworkHours);
  };

  const [consulta, setConsulta] = React.useState([]);

  const handleMedicoConsultas = () => {
    var _objects = [];

    let dia
    let periodo
    let horario
    consultas.map((v) => {
      var _object = {
        startDate: "",
        endDate: "",
        title: "consulta",
      };
      dia = v.data.dia.split("/").reverse().join("/").replaceAll("/", "-");
      periodo = v.data.periodo;
      horario = v.data.horario;
      if (periodo === "manha") {
        switch (horario) {
          case "1":
            _object.startDate = dia + "T" + "08:00";
            _object.endDate = dia + "T" + "09:00";
            _objects.push(_object);
            break;
          case "2":
            _object.startDate = dia + "T" + "09:00";
            _object.endDate = dia + "T" + "10:00";
            _objects.push(_object);
            break;
          case "3":
            _object.startDate = dia + "T" + "10:00";
            _object.endDate = dia + "T" + "11:00";
            _objects.push(_object);
            break;
          case "4":
            _object.startDate = dia + "T" + "11:00";
            _object.endDate = dia + "T" + "12:00";
            _objects.push(_object);
            break;
        }
      } else if (periodo === "tarde"){
        switch (horario) {
          case "1":
            _object.startDate = dia + "T" + "13:00";
            _object.endDate = dia + "T" + "14:00";
            _objects.push(_object);
            break;
          case "2":
            _object.startDate = dia + "T" + "14:00";
            _object.endDate = dia + "T" + "15:00";
            _objects.push(_object);
            break;
          case "3":
            _object.startDate = dia + "T" + "15:00";
            _object.endDate = dia + "T" + "16:00";
            _objects.push(_object);
            break;
          case "4":
            _object.startDate = dia + "T" + "16:00";
            _object.endDate = dia + "T" + "17:00";
            _objects.push(_object);
            break;
        }
      }
    });
    setConsulta(_objects);
  };

  const fetchMedicoData = () => {
    axios
      .get(`${backendURL}agenda/medico/${userId._id}`, {
        headers: { "x-access-token": `${token}` },
      })
      .then((res) => {
        agendaMedico = res.data.item.horariosDisponiveis;
        handleMedicoWorkDays();
        handleMedicoWorkHours();
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${backendURL}consulta/medico/${userId._id}`, {
        headers: { "x-access-token": `${token}` },
      })
      .then((_res) => {
        consultas = _res.data.items;
        handleMedicoConsultas();
      })
      .catch((err) => console.log("deu ruim aqui", err));
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
          <Paper>
            <Scheduler data={consulta}>
              <ViewState />
              <DayView startDayHour={7} endDayHour={18} />
              <WeekView startDayHour={8} endDayHour={18} />
              <Appointments />
              <Toolbar
              // {...(loading ? { rootComponent: ToolbarWithLoading } : null)}
              />
              <DateNavigator />
              <TodayButton />
              <ViewSwitcher />
            </Scheduler>
          </Paper>
        </S.AgendaDiv>
      </S.Content>
    </S.Wrapper>
  );
};

export default AgendaMedico;
