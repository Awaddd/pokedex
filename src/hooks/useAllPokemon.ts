import { AllPokemon, AllPokemonDTO } from "./../types/all-pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import { AllPokemonMapper } from "../network/all-pokemon-mapper";
import { allPokemonUrl, pokemonImageUrl } from "../network/api";
import { getPokemonId } from "../helpers/get-pokemon-id";
import localforage from "localforage";

export const useAllPokemon = () => {
  const [allPokemon, setAllPokemon] = useState<AllPokemon[]>();

  useEffect(() => {
    const fetchData = async () => {
      let allPokemon: AllPokemon[] = [];

      const cached = await localforage.getItem<AllPokemon[]>("all_pokemon");

      if (cached) allPokemon = cached;
      else {
        const { data } = await axios.get<{ results: AllPokemonDTO[] }>(
          allPokemonUrl
        );

        data.results.forEach((pokemon) => {
          const item = AllPokemonMapper(pokemon);
          item.id = getPokemonId(item.url);
          item.image = `${pokemonImageUrl}${item.id}.png`;
          allPokemon.push(item);
        });

        await localforage.setItem("all_pokemon", allPokemon);
      }

      setAllPokemon(allPokemon);
    };

    fetchData().catch(console.error);
  }, []);

  return [allPokemon];
};
