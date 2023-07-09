import { useState } from "react";
import { useAllPokemon } from "../hooks/useAllPokemon";
import { Pokemon, PokemonDTO } from "../types/pokemon";
import PokemonDetails from "./PokemonDetails";
import axios from "axios";
import { pokemonMapper } from "../network/pokemon-mapper";

function AllPokemon() {
  const [allPokemon] = useAllPokemon();
  const [pokemon, setPokemon] = useState<Pokemon>();

  if (!allPokemon) {
    return null;
  }

  function viewDetails(url: string) {
    const fetchData = async () => {
      const { data } = await axios.get<PokemonDTO>(url);
      setPokemon(pokemonMapper(data));
    };

    fetchData().catch(console.error);
  }

  return (
    <>
      {allPokemon.map(item => (
        <div key={item.name} onClick={() => viewDetails(item.url)}>
          <p>{item.name}</p>
          <img src={item.image} alt={item.name} height={150} width={150} />
        </div>
      ))}

      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </>
  )
}

export default AllPokemon;