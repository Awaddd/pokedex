import styled from "styled-components";

export const Pokemon = styled.div`
  img {
    max-width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    margin-top: 1.1rem;
  }

  p {
    margin: 0;
    margin-top: 0.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  display: grid;
  justify-content: center;
  text-align: center;
`;

export const PokemonTypes = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 20px;

  margin: 0;
  margin-top: 1rem;

  li {
    background-color: #fcba03;
    color: #000000;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-weight: 600;
  }
`;
