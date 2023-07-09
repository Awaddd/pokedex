import { useEffect, useState } from "react";
import axios from "axios";
import { pokemonUrl } from "../network/api";
import localforage from "localforage";
import { Pokemon, PokemonDTO } from "../types/pokemon";
import { pokemonMapper } from "../network/pokemon-mapper";

export const usePokemon = (
  id: number
): [Pokemon | undefined, string | undefined] => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      let temp: Pokemon;

      const cached = await localforage.getItem<Pokemon>(`pokemon-${id}`);

      if (cached) temp = cached;
      else {
        const { data } = await axios.get<PokemonDTO>(`${pokemonUrl}${id}`);
        temp = pokemonMapper(data);
        await localforage.setItem(`pokemon-${id}`, temp);
      }

      setPokemon(temp);
    };

    fetchData().catch(() => {
      setError(
        "Sorry, this pokemon could not be loaded at this time. Please try again later"
      );
    });
  }, [id]);

  return [pokemon, error];
};
