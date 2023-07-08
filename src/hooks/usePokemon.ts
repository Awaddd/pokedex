import { useEffect, useState } from "react";
import { Pokemon, PokemonDTO } from "../types/pokemon";
import axios from "axios";
import { pokemonMapper } from "../network/pokemon-mapper";

const limit = 151;

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>();

  useEffect(() => {
    const allPokemon: Pokemon[] = [];

    const fetchData = async () => {
      for (let i = 1; i <= limit; i++) {
        const { data } = await axios.get<PokemonDTO>(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );

        allPokemon.push(pokemonMapper(data));
      }
    };

    fetchData().catch(console.error);
    setPokemon(allPokemon);
  }, []);

  return [pokemon];
};
