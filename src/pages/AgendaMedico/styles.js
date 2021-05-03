import styled from "styled-components";
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const HeaderDiv = styled.div`
  height: 11%;
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AgendaDiv = styled.div`
margin-top: 2rem;
  width: 90%;
  height: 100%;
/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
`;
