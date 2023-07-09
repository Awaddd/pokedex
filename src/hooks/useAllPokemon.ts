import { AllPokemon, AllPokemonDTO } from "./../types/all-pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import { AllPokemonMapper } from "../network/all-pokemon-mapper";
import { allPokemonUrl, pokemonImageUrl } from "../network/api";
import { getPokemonId } from "../helpers/get-pokemon-id";

export const useAllPokemon = () => {
  const [allPokemon, setAllPokemon] = useState<AllPokemon[]>();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonArray: AllPokemon[] = [];

      const { data } = await axios.get<{ results: AllPokemonDTO[] }>(
        allPokemonUrl
      );

      data.results.forEach((pokemon) => {
        const item = AllPokemonMapper(pokemon);
        item.image = `${pokemonImageUrl}${getPokemonId(item.url)}.png`;
        pokemonArray.push(item);
      });

      setAllPokemon(pokemonArray);
    };

    fetchData().catch(console.error);
  }, []);

  return [allPokemon];
};
