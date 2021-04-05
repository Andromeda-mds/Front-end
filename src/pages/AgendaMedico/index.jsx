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
} from "@syncfusion/ej2-react-schedule";

const AgendaMedico = () => {
  return (
    <S.Wrapper>
      <S.HeaderDiv>
        <Header />
      </S.HeaderDiv>
      <S.Content>
        <S.AgendaDiv>
          <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </S.AgendaDiv>
      </S.Content>
    </S.Wrapper>
  );
};

export default AgendaMedico;
