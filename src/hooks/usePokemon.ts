import { useEffect, useState } from "react";
import { Pokemon, PokemonDTO } from "../types/pokemon";
import axios from "axios";
import { pokemonMapper } from "../network/pokemon-mapper";

export const usePokemon = (url: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<PokemonDTO>(url);
      setPokemon(pokemonMapper(data));
    };

    fetchData().catch(console.error);
  }, []);

  return [pokemon];
};
