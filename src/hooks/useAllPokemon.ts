import { AllPokemon, AllPokemonDTO } from "./../types/all-pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import { AllPokemonMapper } from "../network/all-pokemon-mapper";
import { allPokemonUrl } from "../network/api";
import localforage from "localforage";

export const useAllPokemon = () => {
  const [allPokemon, setAllPokemon] = useState<AllPokemon[]>();

  useEffect(() => {
    const fetchData = async () => {
      let pokemonArr: AllPokemon[] = [];

      const cached = await localforage.getItem<AllPokemon[]>("all_pokemon");

      if (cached) pokemonArr = cached;
      else {
        const { data } = await axios.get<{ results: AllPokemonDTO[] }>(
          allPokemonUrl
        );

        data.results.forEach((pokemon) => {
          const item = AllPokemonMapper(pokemon);
          pokemonArr.push(item);
        });

        await localforage.setItem("all_pokemon", pokemonArr);
      }

      setAllPokemon(pokemonArr);
    };

    fetchData().catch(console.error);
  }, []);

  return [allPokemon];
};
