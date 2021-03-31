import styled from "styled-components";
import {Theme} from '../../utils/Styles/Theme';

export const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .content-div{
      display: flex;
      flex-direction: column;
  }
`;
