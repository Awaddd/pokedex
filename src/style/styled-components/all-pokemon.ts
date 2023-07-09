import styled from "styled-components";
import { devices } from "./breakpoints";

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media only screen and ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
`;

export const PokemonCard = styled.div`
  background-color: #646cff;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0.4rem 2rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
    font-weight: 600;
  }

  img {
    max-width: 100%;
  }

  @media only screen and ${devices.sm} {
    padding: 0.4rem 1.2rem;

    h3 {
      font-size: 1rem;
      margin: 0.75rem 0;
    }
  }

  @media only screen and ${devices.md} {
    h3 {
      font-size: 1.2rem;
      margin: 1.2rem 0;
    }
  }

  @media only screen and ${devices.lg} {
    h3 {
      font-size: 1.3rem;
    }
  }
`;
