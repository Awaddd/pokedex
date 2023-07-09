import styled from "styled-components";

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const PokemonCard = styled.div`
  background-color: #646cff;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0.4em 1.2em;

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
  }

  img {
    max-width: 100%;
  }
`;
