import { devices } from "./breakpoints";
import styled from "styled-components";

export const Layout = styled.main`
  display: grid;
  grid-gap: 20px;
  padding: 12px;

  @media only screen and ${devices.md} {
    padding: 15px;
  }

  @media only screen and ${devices.lg} {
    padding: 20px;
    grid-gap: 30px;
  }
`;

export const AppHeader = styled.h1`
  padding: 0;
  margin: 0;
`;
