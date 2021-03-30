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

export const SideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 100%;
  background-color: ${Theme.colors.$sispocThird};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  height: 100%;
  .content-div{
      display: flex;
  }
`;
