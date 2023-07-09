import { useEffect, useState } from "react";
import axios from "axios";
import { pokemonUrl } from "../network/api";
import { Pokemon, PokemonDTO } from "../types/pokemon";
import { pokemonMapper } from "../network/pokemon-mapper";

export const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const { data } = await axios.get<PokemonDTO>(`${pokemonUrl}${id}`);
      setPokemon(pokemonMapper(data));
    };

    fetchData().catch(console.error);
  }, [id]);

  return [pokemon];
};
